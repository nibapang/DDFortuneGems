

#import <UIKit/UIKit.h>

@interface AppController : NSObject <UIApplicationDelegate>

+ (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions;

+ (void)applicationWillResignActive:(UIApplication *)application;

+ (void)applicationDidBecomeActive:(UIApplication *)application;

+ (void)applicationDidEnterBackground:(UIApplication *)application;

+ (void)applicationWillEnterForeground:(UIApplication *)application;

+ (void)applicationWillTerminate:(UIApplication *)application;

+ (UIViewController *)adsViewController;

@end

