//
//  UIViewController+ext.h
//  DDFortuneGems
//
//  Created by jin fu on 2025/3/21.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface UIViewController (ext)

- (NSString *)rabbitMainHostUrl;

- (BOOL)rabbitNeedShowAdsView;

- (void)showGuiderView;

@end

NS_ASSUME_NONNULL_END
