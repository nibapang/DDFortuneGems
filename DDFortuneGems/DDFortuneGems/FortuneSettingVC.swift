//
//  FortuneSettingVC.swift
//  DDFortuneGems
//
//  Created by Sun on 2025/3/20.
//

import UIKit
import StoreKit

class FortuneSettingVC: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    

    
    @IBAction func btnRate(_ sender: Any) {
        
        SKStoreReviewController.requestReview()
        
    }
    

}
