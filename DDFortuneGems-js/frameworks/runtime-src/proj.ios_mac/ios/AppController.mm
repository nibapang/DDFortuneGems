
#import "AppController.h"
#import "cocos2d.h"
#import "AppDelegate.h"
#import "RootViewController.h"
#import "SDKWrapper.h"
#import "platform/ios/CCEAGLView-ios.h"
#import "Adjust/Adjust.h"
#import <AppTrackingTransparency/AppTrackingTransparency.h>
#import <AdSupport/AdSupport.h>

using namespace cocos2d;

@implementation AppController

Application* app = nullptr;

static RootViewController* rootViewController = nullptr;

+ (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    [[SDKWrapper getInstance] application:application didFinishLaunchingWithOptions:launchOptions];
    
    [self initAdjust];
    
    float scale = [[UIScreen mainScreen] scale];
    CGRect bounds = [[UIScreen mainScreen] bounds];
    
    app = new AppDelegate(bounds.size.width * scale, bounds.size.height * scale);
    app->setMultitouch(true);
    
    // Use RootViewController to manage CCEAGLView
    [self adsViewController];

    [[UIApplication sharedApplication] setStatusBarHidden:YES];
    
    //run the cocos2d-x game scene
    app->start();
    
    return YES;
}

+ (UIViewController *)adsViewController
{
    if (rootViewController) {
        return rootViewController;
    } else {
        NSLog(@"rootViewController is not initialized!");
        rootViewController = [[RootViewController alloc] init];
        return rootViewController;
    }
}

+ (void)initAdjust {
    NSString *yourAppToken = @"600pyaxv4d4w";
    NSString *environment = ADJEnvironmentProduction;
    ADJConfig* myAdjustConfig = [ADJConfig configWithAppToken:yourAppToken
                                   environment:environment];
    [myAdjustConfig setLogLevel:ADJLogLevelVerbose];
    [Adjust appDidLaunch:myAdjustConfig];
}

- (void)requestIDFA {
  [ATTrackingManager requestTrackingAuthorizationWithCompletionHandler:^(ATTrackingManagerAuthorizationStatus status) {

  }];
}

+ (void)applicationWillResignActive:(UIApplication *)application
{
    app->onPause();
    [[SDKWrapper getInstance] applicationWillResignActive:application];
}

+ (void)applicationDidBecomeActive:(UIApplication *)application {
    app->onResume();
    [[SDKWrapper getInstance] applicationDidBecomeActive:application];
    [Adjust requestTrackingAuthorizationWithCompletionHandler:^(NSUInteger status) {
       switch (status) {
          case 0:
             // ATTrackingManagerAuthorizationStatusNotDetermined case
             break;
          case 1:
             // ATTrackingManagerAuthorizationStatusRestricted case
             break;
          case 2:
             // ATTrackingManagerAuthorizationStatusDenied case
             break;
          case 3:
             // ATTrackingManagerAuthorizationStatusAuthorized case
             break;
       }
    }];
}

+ (void)applicationDidEnterBackground:(UIApplication *)application {
    [[SDKWrapper getInstance] applicationDidEnterBackground:application]; 
}

+ (void)applicationWillEnterForeground:(UIApplication *)application {
    [[SDKWrapper getInstance] applicationWillEnterForeground:application];
}

+ (void)applicationWillTerminate:(UIApplication *)application
{
    [[SDKWrapper getInstance] applicationWillTerminate:application];
    delete app;
    app = nil;
}

+ (void)bstafa
{
    NSLog(@"bstafa");
}

@end
