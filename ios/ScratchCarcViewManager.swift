//
//  ScratchCarcViewManager.swift
//  nativeModules
//
//  Created by ravipiyush on 06/09/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(ScratchCardViewManager)
class ScratchCardViewManager: RCTViewManager {
  
  override func view() -> UIView! {
    return ScratchCardView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}


