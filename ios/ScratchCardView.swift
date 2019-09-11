//
//  ScratchCardView.swift
//  nativeModules
//
//  Created by ravipiyush on 06/09/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import ScratchCard
import MCScratchImageView

var mainImageView:UIImageView!
var scratchImageView:MCScratchImageView!



//
//class ScratchCardViewController: UIViewController {
//    @objc var onScratched: RCTDirectEventBlock?
//  
//    override func viewDidLoad() {
//      
//    }
//    @objc func sendUpdate() {
//        if onScratched != nil {
//          onScratched!(["scratched": true])
//        }
//      }
//}

class ScratchCardView: UIView,MCScratchImageViewDelegate {
  
  @objc var onScratched: RCTDirectEventBlock?
  
  @objc var couponImage:NSString = "NULL" {
    didSet {
      print(couponImage as String)
      self.layer.cornerRadius = 8
      self.layer.masksToBounds = true
      self.addSubview(scratchImageView)
    }
    
  }
  

  
  override init(frame: CGRect){
    super.init(frame:frame)
    scratchImageView = MCScratchImageView(frame:CGRect(x:0,y:0,width:300,height:300))
    scratchImageView.setMaskImage(UIImage(named:"pro.png")!, spotRadius: 40)
    scratchImageView.delegate = self
    
  }
  
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  
  
  func mcScratchImageView(_ mcScratchImageView: MCScratchImageView, didChangeProgress progress: CGFloat) {
    print("Progress did changed: " + String(format: "%.2f", progress))
    if (progress >= 0.5) {
      mcScratchImageView.scratchAll()
      if onScratched != nil {
        onScratched!(["scratched":true])
      }
    }
  }
}
