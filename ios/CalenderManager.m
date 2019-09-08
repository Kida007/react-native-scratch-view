//
//  CalenderManager.m
//  nativeModules
//
//  Created by ravipiyush on 02/09/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CalenderManager.h"
#import <React/RCTLog.h>

@implementation CalenderManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(addEvent:( NSString *)name location:(NSString *)location){
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}


@end
 
