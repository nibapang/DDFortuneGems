//
//  FortuneSnakeLadderSuitVC.swift
//  DDFortuneGems
//
//  Created by Sun on 2025/3/20.
//

import UIKit
import AVFoundation

class FortuneSnakeLadderSuitVC: UIViewController {

    // MARK: - IBOutlets
    @IBOutlet weak var boardView: UIView!
    @IBOutlet weak var diceImageView: UIImageView!
    @IBOutlet weak var player1ImageView: UIImageView!
    @IBOutlet weak var player2ImageView: UIImageView!
    @IBOutlet weak var rollDiceButton: UIButton!
    @IBOutlet weak var statusLabel: UILabel!

    // MARK: - Game State
    var playerPositions = [0, 0]
    var currentPlayer = 0
    var gameActive = true
    let totalSquares = 36
    let specialSquares: [Int: Int] = [
        // Ladders
        6: 18,
        12: 24,
        15: 27,
        // Snakes
        11: 3,
        20: 16,
        25: 23,
        32: 28
    ]
    
    // MARK: - Audio
    var audioPlayer: AVAudioPlayer?
    
  
    var isAnimating = false

    // MARK: - Lifecycle
    override func viewDidLoad() {
        super.viewDidLoad()
        initGame()
    }
    
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        if !isAnimating {
            updatePlayerPosition(0, to: playerPositions[0])
            updatePlayerPosition(1, to: playerPositions[1])
        }
    }
    
    // MARK: - IBAction
    @IBAction func rollDiceTapped(_ sender: UIButton) {
        guard gameActive, !isAnimating else { return }
        
        rollDiceButton.isEnabled = false
        
        // Roll the dice.
        let roll = Int.random(in: 1...6)
        diceImageView.image = UIImage(named: "dice\(roll)")
        
        let playerIndex = currentPlayer
        let startingPosition = playerPositions[playerIndex]
        var newPosition = startingPosition
        
        // If off the board, must roll a 1.
        if startingPosition == 0 {
            if roll == 1 {
                newPosition = 1
            } else {
                statusLabel.text = "Player \(playerIndex + 1) must roll a 1 to enter!"
                switchTurn()
                rollDiceButton.isEnabled = true
                return
            }
        } else {
            let potentialPos = startingPosition + roll
            if potentialPos > totalSquares {
                statusLabel.text = "Player \(playerIndex + 1) overshot!"
                switchTurn()
                rollDiceButton.isEnabled = true
                return
            }
            newPosition = potentialPos
        }
        
        var finalPosition = newPosition
        if let jumpPos = specialSquares[newPosition] {
            finalPosition = jumpPos
        }
        
        animatePlayerMovement(playerIndex: playerIndex, from: startingPosition, to: newPosition) {
            if finalPosition != newPosition {
                if finalPosition > newPosition {
                    self.animateLadderMovement(playerIndex: playerIndex, from: newPosition, to: finalPosition) {
                        self.playerPositions[playerIndex] = finalPosition
                        self.afterMovement(playerIndex: playerIndex, finalTile: finalPosition)
                    }
                } else {
                    self.animatePlayerMovement(playerIndex: playerIndex, from: newPosition, to: finalPosition) {
                        self.playerPositions[playerIndex] = finalPosition
                        self.afterMovement(playerIndex: playerIndex, finalTile: finalPosition)
                    }
                }
            } else {
                self.playerPositions[playerIndex] = finalPosition
                self.afterMovement(playerIndex: playerIndex, finalTile: finalPosition)
            }
        }
    }
    
    // MARK: - Game Logic
    func switchTurn() {
        currentPlayer = (currentPlayer + 1) % 2
        if gameActive {
            statusLabel.text = "Player \(currentPlayer + 1)'s turn"
        }
    }
    
    func initGame() {
        playerPositions = [0, 0]
        currentPlayer = 0
        gameActive = true
        isAnimating = false
        
        diceImageView.image = UIImage(named: "dice0")
        updatePlayerPosition(0, to: 0)
        updatePlayerPosition(1, to: 0)
        statusLabel.text = "Player 1, roll a 1 to enter!"
        rollDiceButton.isEnabled = true
    }
    
    func afterMovement(playerIndex: Int, finalTile: Int) {
        if finalTile == totalSquares {
            statusLabel.text = "Player \(playerIndex + 1) wins!"
            gameActive = false
            let alert = UIAlertController(title: "Game Over", message: "Player \(playerIndex + 1) wins! Do you want to restart?", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "Restart", style: .default, handler: { _ in
                self.initGame()
            }))
            present(alert, animated: true, completion: nil)
        } else {
            switchTurn()
            // Re-enable the dice button once the turn is complete.
            rollDiceButton.isEnabled = true
        }
    }
    
    // MARK: - Positioning Players
    /// Sets the imageView’s center based on a tile number.
    func updatePlayerPosition(_ playerIndex: Int, to tile: Int) {
        let imageView = (playerIndex == 0) ? player1ImageView! : player2ImageView!
        guard tile > 0 else {
            imageView.center = CGPoint(x: -100, y: -100)
            return
        }
        imageView.center = centerForTile(tile)
    }
    
    /// Returns the center point for a given tile (1...36) using snake (zigzag) ordering.
    func centerForTile(_ tile: Int) -> CGPoint {
        let columns = 6
        let rows = 6
        let logicalRow = (tile - 1) / columns
        var logicalCol = (tile - 1) % columns
        if logicalRow % 2 == 1 {
            logicalCol = (columns - 1) - logicalCol
        }
        let visualRow = (rows - 1) - logicalRow
        let tileWidth = boardView.bounds.width / CGFloat(columns)
        let tileHeight = boardView.bounds.height / CGFloat(rows)
        let xCenter = tileWidth * (CGFloat(logicalCol) + 0.5)
        let yCenter = tileHeight * (CGFloat(visualRow) + 0.5)
        return CGPoint(x: xCenter, y: yCenter)
    }
    
    // MARK: - Animation and Sound
     func animatePlayerMovement(playerIndex: Int, from startTile: Int, to endTile: Int, then completion: @escaping () -> Void) {
        let imageView = (playerIndex == 0) ? player1ImageView! : player2ImageView!
        isAnimating = true
        
        // If start equals end, nothing to animate.
        if startTile == endTile {
            isAnimating = false
            completion()
            return
        }
        
        let isForward = endTile > startTile
        let nextTile = isForward ? startTile + 1 : startTile - 1
        
        func animateStep(tile: Int) {
            UIView.animate(withDuration: 0.3, animations: {
                imageView.center = self.centerForTile(tile)
            }, completion: { _ in
                self.playStepSound()
                let next = isForward ? tile + 1 : tile - 1
                if isForward {
                    if next <= endTile {
                        animateStep(tile: next)
                    } else {
                        self.isAnimating = false
                        completion()
                    }
                } else {
                    if next >= endTile {
                        animateStep(tile: next)
                    } else {
                        self.isAnimating = false
                        completion()
                    }
                }
            })
        }
        animateStep(tile: nextTile)
    }
    
    /// Animates a ladder climb using a curved keyframe animation.
    func animateLadderMovement(playerIndex: Int, from startTile: Int, to endTile: Int, completion: @escaping () -> Void) {
        let imageView = (playerIndex == 0) ? player1ImageView! : player2ImageView!
        isAnimating = true
        
        let startPoint = centerForTile(startTile)
        let endPoint = centerForTile(endTile)
        let midX = (startPoint.x + endPoint.x) / 2
        let midY = min(startPoint.y, endPoint.y) - 40
        let midPoint = CGPoint(x: midX, y: midY)
        
        let path = UIBezierPath()
        path.move(to: startPoint)
        path.addQuadCurve(to: endPoint, controlPoint: midPoint)
        
        let ladderAnimation = CAKeyframeAnimation(keyPath: "position")
        ladderAnimation.path = path.cgPath
        ladderAnimation.duration = 0.6
        ladderAnimation.timingFunction = CAMediaTimingFunction(name: .easeInEaseOut)
        ladderAnimation.fillMode = .forwards
        ladderAnimation.isRemovedOnCompletion = false
        
        imageView.layer.add(ladderAnimation, forKey: "ladderAnimation")
        playStepSound()
        
        DispatchQueue.main.asyncAfter(deadline: .now() + ladderAnimation.duration) {
            imageView.layer.removeAnimation(forKey: "ladderAnimation")
            imageView.center = endPoint
            self.isAnimating = false
            completion()
        }
    }
    
    /// Plays a short sound effect for each movement step.
    func playStepSound() {
        guard let url = Bundle.main.url(forResource: "step", withExtension: "mp3") else { return }
        do {
            audioPlayer = try AVAudioPlayer(contentsOf: url)
            audioPlayer?.play()
        } catch {
            print("Error playing sound: \(error.localizedDescription)")
        }
    }
}
