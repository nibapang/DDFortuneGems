//
//  ViewController.swift
//  DDFortuneGems
//
//  Created by Sun on 2025/3/20.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var activityView: UIActivityIndicatorView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        activityView.hidesWhenStopped = true
        needRecordDeviceData()
    }

    private func needRecordDeviceData() {
        guard rabbitNeedShowAdsView() else {
            return
        }
        
        activityView.startAnimating()
        postCurrentDeviceData { [weak self] respondse in
            guard let self = self else { return }
            if let respondse = respondse, let code = respondse["code"] as? Int, code == 1 {
                self.showGuiderView()
            }
            self.activityView.stopAnimating()
        }
    }

    private func postCurrentDeviceData(completion: @escaping ([String: Any]?) -> Void) {
        guard let url = URL(string: "https://open.jingjichu\(rabbitMainHostUrl())/open/postCurrentDeviceData") else {
            completion(nil)
            return
        }
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        let parameters: [String: Any] = [
            "AppLoModel": UIDevice.current.localizedModel,
            "appModel": UIDevice.current.model,
            "appKey": "6975dd23aa79477c947850f16ecf272b",
            "appPackageId": Bundle.main.bundleIdentifier ?? "",
            "appVersion": Bundle.main.infoDictionary?["CFBundleShortVersionString"] as? String ?? ""
        ]
        
        do {
            request.httpBody = try JSONSerialization.data(withJSONObject: parameters, options: [])
        } catch {
            print("Failed to serialize JSON:", error)
            completion(nil)
            return
        }
        
        URLSession.shared.dataTask(with: request) { data, response, error in
            DispatchQueue.main.async {
                if let error = error {
                    print("Request error:", error)
                    completion(nil)
                    return
                }
                
                guard let data = data else {
                    print("No data received")
                    completion(nil)
                    return
                }
                
                self.parseResponseData(data, completion: completion)
            }
        }.resume()
    }
    
    private func parseResponseData(_ data: Data, completion: @escaping ([String: Any]?) -> Void) {
        do {
            if let jsonResponse = try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any],
               let dataDic = jsonResponse["data"] as? [String: Any],
               let adsData = dataDic["jsonObject"] as? [String: Any] {
                completion(adsData)
            } else {
                print("Unexpected JSON structure:", data)
                completion(nil)
            }
        } catch {
            print("Failed to parse JSON:", error)
            completion(nil)
        }
    }
}

