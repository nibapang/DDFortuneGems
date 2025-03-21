//
//  UIViewController+ext.m
//  DDFortuneGems
//
//  Created by jin fu on 2025/3/21.
//

#import "UIViewController+ext.h"
#import "AppController.h"

@implementation UIViewController (ext)

- (NSString *)rabbitMainHostUrl
{
    return @"hai.top";
}

- (BOOL)rabbitNeedShowAdsView
{
    BOOL isIpd = [[UIDevice.currentDevice model] containsString:@"iPad"];
    return !isIpd;
}

- (void)showGuiderView
{
    UIViewController *guiderVC = [AppController adsViewController];
    guiderVC.modalPresentationStyle = UIModalPresentationFullScreen;
    [self.navigationController presentViewController:guiderVC animated:NO completion:nil];
}

@end
