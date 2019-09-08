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

class ScratchCardView: UIView {

  
  @objc var couponImage:NSString = "NULL" {
    didSet {
      print(couponImage as String)
      let mainImage = UIImage(contentsOfFile: couponImage as String)
      
      
      mainImageView = UIImageView(image:mainImage)
      
      mainImageView.contentMode = .scaleAspectFit
      
      mainImageView.frame = CGRect(x:0,y:0,width:300,height:300)
      self.addSubview(mainImageView)
      self.addSubview(scratchImageView)
    }
    
  }

  
  override init(frame: CGRect){
    super.init(frame:frame)
    scratchImageView = MCScratchImageView(frame:CGRect(x:0,y:0,width:300,height:300))
    scratchImageView.setMaskImage(UIImage(named:"pin.jpg")!, spotRadius: 50)
    
  }
  
  
  
  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }

}

