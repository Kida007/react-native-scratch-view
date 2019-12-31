#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(ScratchViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(data, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onRevealed, RCTDirectEventBlock)


@end
