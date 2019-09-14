//
//  ScratchCardView.swift
//  nativeModules
//
//  Created by ravipiyush on 06/09/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import ScratchCard
import MCScratchImageView
import Kingfisher



var mainImageView:UIImageView!
var scratchImageView:MCScratchImageView!


class ScratchCardView: UIView,MCScratchImageViewDelegate {
  
  @objc var onScratched: RCTDirectEventBlock?
  
  @objc var autoScratchProgress:CGFloat = 0.8 {
    
    didSet{
      print("auto")
      print(autoScratchProgress)
    }
    
  }
  
  
  @objc var data:NSDictionary = [:] {
    didSet {
      
      let url = URL(string: data["uri"] as! String)
      
      let resource = ImageResource(downloadURL: url!)

      
      scratchImageView = MCScratchImageView(frame:CGRect(x:0,y:0,width:data["width"] as! Double ,height:data["height"]as! Double))

      KingfisherManager.shared.retrieveImage(with:  resource, options: nil, progressBlock: nil, completionHandler: { image, error, cacheType, imageURL in
        
        let spotRadius = self.data["spotRadius"] as! CGFloat
        
        scratchImageView.setMaskImage(image!, spotRadius: spotRadius)

      })
      
    
      scratchImageView.delegate = self

      self.layer.cornerRadius = 8
      self.layer.masksToBounds = true
      self.addSubview(scratchImageView)
    }
    
  }
  

  
  override init(frame: CGRect){
    super.init(frame:frame)

  }
  
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  
  
  func mcScratchImageView(_ mcScratchImageView: MCScratchImageView, didChangeProgress progress: CGFloat) {
    print("Progress did changed: " + String(format: "%.2f", progress))
    if (progress >= autoScratchProgress) {
      mcScratchImageView.scratchAll()
      if onScratched != nil {
        onScratched!(["scratched":true])
      }
    }
  }
}
