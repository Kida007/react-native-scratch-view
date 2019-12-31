//
//  ScratchViewManager.swift
//  nativeModules
//
//  Created by ravipiyush on 06/09/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(ScratchViewManager)
class ScratchViewManager: RCTViewManager {
  
  override func view() -> UIView! {
    return ScratchView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}


