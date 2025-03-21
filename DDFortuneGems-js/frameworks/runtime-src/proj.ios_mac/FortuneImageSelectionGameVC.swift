//
//  FortuneImageSelectionGameVC.swift
//  DDFortuneGems
//
//  Created by Sun on 2025/3/20.
//

import UIKit
import AVFoundation

struct Card: Equatable {
    let suit: String
    let rank: String
    var imageName: String {
        return "\(rank)_of_\(suit)"
    }
    static func == (lhs: Card, rhs: Card) -> Bool {
        return lhs.suit == rhs.suit && lhs.rank == rhs.rank
    }
}

private let suits = ["clubs", "diamonds", "hearts", "spades"]
private let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"]

class FortuneImageSelectionGameVC: UIViewController {
    
    @IBOutlet var imageViews: [UIImageView]!
    @IBOutlet var targetImageViews: [UIImageView]!
    @IBOutlet weak var timerLabel: UILabel!
    @IBOutlet weak var scoreLabel: UILabel!
    
    var allImages: [UIImage] = []
    var displayedImages: [UIImage] = []
    var targetImages: [UIImage] = []
    var score = 0
    var timer: Timer?
    var timeRemaining = 30
    var targetScore = 10
    var audioPlayer: AVAudioPlayer?
    var hasShownSettingsAlert = false // Flag to prevent multiple alerts
    
    override func viewDidLoad() {
        super.viewDidLoad()
        loadSoundEffect()
        // Removed promptUserForSettings from here.
    }
    
    override func viewDidAppear(_ animated: Bool) {
        super.viewDidAppear(animated)
        // Present the alert only once after the view has fully appeared.
        if !hasShownSettingsAlert {
            hasShownSettingsAlert = true
            promptUserForSettings()
        }
    }
    
    func promptUserForSettings() {
        let alert = UIAlertController(title: "Game Settings", message: "Set your target score and time.", preferredStyle: .alert)
        alert.addTextField { textField in
            textField.placeholder = "Enter target score"
            textField.keyboardType = .numberPad
        }
        alert.addTextField { textField in
            textField.placeholder = "Enter time in seconds"
            textField.keyboardType = .numberPad
        }
        alert.addAction(UIAlertAction(title: "Start", style: .default, handler: { _ in
            guard let scoreText = alert.textFields?[0].text, let timeText = alert.textFields?[1].text,
                  let scoreValue = Int(scoreText), let timeValue = Int(timeText),
                  scoreValue > 0, timeValue > 0 else {
                // If input is invalid, re-prompt the settings.
                self.promptUserForSettings()
                return
            }
            self.targetScore = scoreValue
            self.timeRemaining = timeValue
            self.setupGame()
        }))
        present(alert, animated: true)
    }
    
    func setupGame() {
        // Reset game state
        score = 0
        // Reset all image selections (restore full opacity)
        for imageView in imageViews {
            imageView.alpha = 1.0
        }
        loadCardImages()
        generateTargetImages()
        generateDisplayedImages()
        setupImageViewGestures()
        startTimer()
        updateScoreLabel()
    }
    
    func loadCardImages() {
        allImages.removeAll()
        for suit in suits {
            for rank in ranks {
                let card = Card(suit: suit, rank: rank)
                if let image = UIImage(named: card.imageName) {
                    allImages.append(image)
                }
            }
        }
    }
    
    func generateTargetImages() {
        targetImages.removeAll()
        while targetImages.count < targetImageViews.count {
            if let newImage = allImages.randomElement(), !targetImages.contains(newImage) {
                targetImages.append(newImage)
            }
        }
        for (index, targetImageView) in targetImageViews.enumerated() {
            targetImageView.image = targetImages[index]
        }
    }
    
    func generateDisplayedImages() {
        displayedImages.removeAll()
        var matchingImages: [UIImage] = []
        for targetImage in targetImages {
            matchingImages.append(contentsOf: [targetImage, targetImage])
        }
        while matchingImages.count < imageViews.count {
            if let newImage = allImages.randomElement() {
                matchingImages.append(newImage)
            }
        }
        displayedImages = matchingImages.shuffled()
        for (index, imageView) in imageViews.enumerated() {
            imageView.image = displayedImages[index]
        }
    }
    
    func setupImageViewGestures() {
        for imageView in imageViews {
            let tapGesture = UITapGestureRecognizer(target: self, action: #selector(imageTapped(_:)))
            imageView.addGestureRecognizer(tapGesture)
            imageView.isUserInteractionEnabled = true
        }
    }
    
    @objc func imageTapped(_ sender: UITapGestureRecognizer) {
        guard let tappedImageView = sender.view as? UIImageView, let tappedImage = tappedImageView.image else { return }
        if let index = targetImages.firstIndex(of: tappedImage) {
            score += 1
            playSoundEffect()
            animateImageSelection(tappedImageView)
            updateScoreLabel()
            
            tappedImageView.alpha = 0.5 // Dull the image to indicate selection
            
            targetImages.remove(at: index)
            if targetImages.isEmpty {
                generateTargetImages()
                generateDisplayedImages()
                // Reset the dull effect after all selections have been processed.
                for imageView in imageViews {
                    imageView.alpha = 1.0
                }
            }
            
            if score >= targetScore {
                timer?.invalidate()
                showGameOverAlert(didWin: true)
            }
        }
    }
    
    func startTimer() {
        timer?.invalidate()
        timerLabel.text = "Time: \(timeRemaining)"
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true) { [weak self] _ in
            guard let self = self else { return }
            self.timeRemaining -= 1
            self.timerLabel.text = "Time: \(self.timeRemaining)"
            if self.timeRemaining <= 0 {
                self.timer?.invalidate()
                self.showGameOverAlert(didWin: false)
            }
        }
    }
    
    func updateScoreLabel() {
        scoreLabel.text = "Score: \(score)"
    }
    
    func showGameOverAlert(didWin: Bool) {
        let title = didWin ? "Congratulations!" : "Game Over"
        let message = didWin ? "You reached the target score!" : "Your Score: \(score)"
        let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "Restart", style: .default, handler: { _ in
            self.hasShownSettingsAlert = false  // Reset flag to allow alert on restart
            self.promptUserForSettings()
        }))
        present(alert, animated: true)
    }
    
    func loadSoundEffect() {
        if let soundURL = Bundle.main.url(forResource: "step", withExtension: "mp3") {
            do {
                audioPlayer = try AVAudioPlayer(contentsOf: soundURL)
                audioPlayer?.prepareToPlay()
            } catch {
                print("Error loading sound effect")
            }
        }
    }
    
    func playSoundEffect() {
        audioPlayer?.play()
    }
    
    func animateImageSelection(_ imageView: UIImageView) {
        UIView.animate(withDuration: 0.3, animations: {
            imageView.transform = CGAffineTransform(scaleX: 1.2, y: 1.2)
        }) { _ in
            UIView.animate(withDuration: 0.3) {
                imageView.transform = .identity
            }
        }
    }
}
