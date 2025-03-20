//
//  FortuneHomeVC.swift
//  DDFortuneGems
//
//  Created by Sun on 2025/3/20.
//

import UIKit

class FortuneHomeVC: UIViewController, UIScrollViewDelegate {

    // MARK: - IBOutlets
    @IBOutlet weak var scrollView: UIScrollView!
    
    // Outlets for the three views added in the scroll view
    @IBOutlet weak var firstView: UIView!
    @IBOutlet weak var secondView: UIView!
    @IBOutlet weak var thirdView: UIView!
    
    // Outlets for navigation buttons
    @IBOutlet weak var leftButton: UIButton!
    @IBOutlet weak var rightButton: UIButton!
    
    // MARK: - Variables
    var currentPage: Int = 0
    let totalPages: Int = 3

    // MARK: - Lifecycle Methods
    override func viewDidLoad() {
        super.viewDidLoad()
        
        scrollView.delegate = self
        scrollView.isPagingEnabled = true
        
        // Hide the left button initially (we start at page 0)
        leftButton.isHidden = true
    }
    
    // Set frames and contentSize after layout
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        
        // Update contentSize to span all three pages
        scrollView.contentSize = CGSize(width: scrollView.frame.size.width * CGFloat(totalPages),
                                        height: scrollView.frame.size.height)
        
        // If you're not using Auto Layout for these views, you can set their frames manually:
        firstView.frame = CGRect(x: 0,
                                 y: 0,
                                 width: scrollView.frame.size.width,
                                 height: scrollView.frame.size.height)
        
        secondView.frame = CGRect(x: scrollView.frame.size.width,
                                  y: 0,
                                  width: scrollView.frame.size.width,
                                  height: scrollView.frame.size.height)
        
        thirdView.frame = CGRect(x: scrollView.frame.size.width * 2,
                                 y: 0,
                                 width: scrollView.frame.size.width,
                                 height: scrollView.frame.size.height)
    }
    
    // MARK: - IBActions
    @IBAction func leftButtonTapped(_ sender: UIButton) {
        // Scroll left if not on the first page
        if currentPage > 0 {
            currentPage -= 1
            let newOffset = CGPoint(x: scrollView.frame.size.width * CGFloat(currentPage), y: 0)
            scrollView.setContentOffset(newOffset, animated: true)
            updateNavigationButtons()
        }
    }
    
    @IBAction func rightButtonTapped(_ sender: UIButton) {
        // Scroll right if not on the last page
        if currentPage < totalPages - 1 {
            currentPage += 1
            let newOffset = CGPoint(x: scrollView.frame.size.width * CGFloat(currentPage), y: 0)
            scrollView.setContentOffset(newOffset, animated: true)
            updateNavigationButtons()
        }
    }
    
    // MARK: - Helper Method
    func updateNavigationButtons() {
        // Hide the left button on the first page
        leftButton.isHidden = (currentPage == 0)
        // Hide the right button on the last page
        rightButton.isHidden = (currentPage == totalPages - 1)
    }
    
    // MARK: - UIScrollViewDelegate
    // Update the current page when the user scrolls manually
    func scrollViewDidEndDecelerating(_ scrollView: UIScrollView) {
        currentPage = Int(scrollView.contentOffset.x / scrollView.frame.size.width)
        updateNavigationButtons()
    }
}
