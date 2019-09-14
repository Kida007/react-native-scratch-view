#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(ScratchCardViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(autoScratchProgress, CGFloat)
RCT_EXPORT_VIEW_PROPERTY(data, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(onScratched, RCTDirectEventBlock)


@end
