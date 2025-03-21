
#import "Gifrnlpblmoiavel.h"
#import <AVFoundation/AVFoundation.h>
#import <AudioToolbox/AudioToolbox.h>
#import "RootViewController.h"
#import "Adjust/Adjust.h"
#import "CommonCrypto/CommonDigest.h"
#import "RootViewController.h"

@implementation Gifrnlpblmoiavel

+ (void) onStart
{
}


+ (void)inAppPurchase:product

{
}

+ (void)showAd:(NSString*)userId customData:(NSString*)customData
{
    
}

+ (NSString*)getAppVersion
{
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
    return [infoDictionary objectForKey:@"CFBundleShortVersionString"];[infoDictionary objectForKey:@"CFBundleShortVersionString"];
}


+ (NSString*)buildVersion
{
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
    return [infoDictionary objectForKey:@"CFBundleVersion"];
}

+ (NSString*)getAPPBundleId
{
    return [[NSBundle mainBundle] bundleIdentifier];
}

+ (NSString*)getDeviceBrand
{
    return @"";
}

+ (NSString*)getDeviceOpSysVision
{
    return @"";
}

+ (NSString*)getDeviceId
{
    NSString* pkgName = [[NSBundle mainBundle] bundleIdentifier];
    NSString* imei = nil;
    NSMutableDictionary *kc_dic = [NSMutableDictionary dictionaryWithObjectsAndKeys: (id)kSecClassGenericPassword,(id)kSecClass, pkgName, (id)kSecAttrService, pkgName, (id)kSecAttrAccount,(id)kSecAttrAccessibleAfterFirstUnlock,(id)kSecAttrAccessible, nil];
    [kc_dic setObject:(id)kCFBooleanTrue forKey:(id)kSecReturnData];
    [kc_dic setObject:(id)kSecMatchLimitOne forKey:(id)kSecMatchLimit];
    CFDataRef dataKey = NULL;
    OSStatus ss =  SecItemCopyMatching((CFDictionaryRef)kc_dic, (CFTypeRef *)&dataKey);
    if (ss == noErr) {
        @try {
            imei = [NSKeyedUnarchiver unarchiveObjectWithData:(__bridge NSData *)dataKey];
        } @catch (NSException *e) {
            imei = @"";
        }
    }
    else if (ss != errSecItemNotFound) {
        imei = @"";
    }
    if (dataKey){
        CFRelease(dataKey);
    }

    if (imei == nil || imei.length == 0) {
        CFUUIDRef uuidref = CFUUIDCreate(nil);
        CFStringRef uuidrefStr = CFUUIDCreateString(nil, uuidref);
        NSString* uuidStr = (NSString *)CFBridgingRelease(CFStringCreateCopy( NULL, uuidrefStr));
        CFRelease(uuidref);
        CFRelease(uuidrefStr);
        
        const char *uuidStr_str = [uuidStr UTF8String];
        unsigned char md5[CC_MD5_DIGEST_LENGTH];
        CC_MD5(uuidStr_str, (CC_LONG)strlen(uuidStr_str), md5);
        NSMutableString *mutable_str = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH * 2];
        for(int i = 0; i < CC_MD5_DIGEST_LENGTH; i++) {
            [mutable_str appendFormat:@"%02x", md5[i]];
        }
        imei = mutable_str;
        
        NSMutableDictionary *kc_dic2 = [NSMutableDictionary dictionaryWithObjectsAndKeys:(id)kSecClassGenericPassword,(id)kSecClass,pkgName, (id)kSecAttrService,pkgName, (id)kSecAttrAccount,(id)kSecAttrAccessibleAfterFirstUnlock,(id)kSecAttrAccessible,nil];
        SecItemDelete((CFDictionaryRef)kc_dic2);
        [kc_dic2 setObject:[NSKeyedArchiver archivedDataWithRootObject:imei] forKey:(id)kSecValueData];
        SecItemAdd((CFDictionaryRef)kc_dic2, NULL);
    }
    return imei;
}


+ (NSString*)getDeviceToken
{
    return @"";
}


+ (NSString*)KoTrackEvent:(NSString*)jsonStr
{
    return @"";
}

+ (NSString*)getKoTrackUUID
{
    return @"";
}

+ (NSString*)IosZFReplacement:(NSString*)jsonStr
{
    return @"";
}

+ (NSString*)getOpenAppUrlDataString
{
    return @"";
}
+(NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString
{
    NSError *error;
    NSData *data = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    NSDictionary *json = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:&error];
    
    if (json) {
        NSLog(@"JSON Object: %@", json);
    } else {
        NSLog(@"Error: %@", error);
    }
    return json;
}




+ (void)systemShare:(NSString*)jsonStr
{
    NSDictionary* data = [Gifrnlpblmoiavel dictionaryWithJsonString:jsonStr];
    
    //活动的图片
    UIImage * image = [UIImage imageNamed:@"ios"];
    NSString * title = [data objectForKey:@"title"];
    NSArray *activityItems = [NSArray arrayWithObjects:[data objectForKey:@"content"], nil];
    UIActivityViewController * con = [[UIActivityViewController alloc]initWithActivityItems:activityItems applicationActivities:nil];
    //活动行为结束后回调的block
    con.completionWithItemsHandler = ^(UIActivityType activityType, BOOL completed, NSArray * returnedItems, NSError * __nullable activityError){
        NSLog(@"%@\n%@",activityType,returnedItems);
    };

    [[RootViewController sharedInstance] presentViewController:con animated:YES completion:nil];
}
+ (NSString*)gps_adid
{
    return [Adjust idfv];
}

+ (NSString*)gps_idfa
{
    return [Adjust idfa];
}

+ (NSString*)adid
{
    return [Adjust adid];
}

+ (NSString*)getlocale
{
    return [[NSLocale currentLocale] objectForKey:NSLocaleCountryCode];
}

+ (void)setOrientation:(NSString*)orientation
{
    if([orientation isEqual:@"portrait"]){
        [Gifrnlpblmoiavel rotateToOrientation:UIInterfaceOrientationPortrait];
    }else{
        [Gifrnlpblmoiavel rotateToOrientation:UIInterfaceOrientationLandscapeRight];
    }
    NSLog(@"setOrientation%@",orientation);
}

+ (UIImage*)imageByScalingAndCroppingForSize:(UIImage*)sourceImage size:(CGSize)targetSize
{
    UIImage *newImage = nil;
    CGSize imageSize = sourceImage.size;
    CGFloat width = imageSize.width;
    CGFloat height = imageSize.height;
    CGFloat targetWidth = targetSize.width;
    CGFloat targetHeight = targetSize.height;
    CGFloat scaleFactor = 0.0;
    CGFloat scaledWidth = targetWidth;
    CGFloat scaledHeight = targetHeight;
    CGPoint thumbnailPoint = CGPointMake(0.0,0.0);
    
    if (CGSizeEqualToSize(imageSize, targetSize) == NO)
    {
        CGFloat widthFactor = targetWidth / width;
        CGFloat heightFactor = targetHeight / height;
        
        if (widthFactor > heightFactor)
            scaleFactor = widthFactor; // scale to fit height
        else
            scaleFactor = heightFactor; // scale to fit width
        scaledWidth= width * scaleFactor;
        scaledHeight = height * scaleFactor;
                // center the image
        if (widthFactor > heightFactor)
        {
            thumbnailPoint.y = (targetHeight - scaledHeight) * 0.5;
        }
        else if (widthFactor < heightFactor)
        {
            thumbnailPoint.x = (targetWidth - scaledWidth) * 0.5;
        }
    }
    
    UIGraphicsBeginImageContext(targetSize); // this will crop
    
    CGRect thumbnailRect = CGRectZero;
    thumbnailRect.origin = thumbnailPoint;
    thumbnailRect.size.width= scaledWidth;
    thumbnailRect.size.height = scaledHeight;
    
    [sourceImage drawInRect:thumbnailRect];
    
    newImage = UIGraphicsGetImageFromCurrentImageContext();
    if(newImage == nil)
        NSLog(@"could not scale image");
    
    //pop the context to get back to the default
    UIGraphicsEndImageContext();
    return newImage;
}

+(void)setTxtToClipboard:(NSString*)txt
{
    UIPasteboard* board = [UIPasteboard generalPasteboard];
    board.string = txt;
}

+(NSString*)getTxtFromClipboard
{
    UIPasteboard* board = [UIPasteboard generalPasteboard];
    if(board.string != nil)
        return board.string;
    else
        return @"";
}

+(void)startRecord:(NSString*)recordFilePath{
}

+ (void)rotateToOrientation:(UIInterfaceOrientation)orientation {
    if (@available(iOS 13.0, *)) {
        // iOS 13 及以上版本使用 UIWindowScene
        UIWindowScene *windowScene = (UIWindowScene *)[UIApplication.sharedApplication.connectedScenes anyObject];
        if ([windowScene isKindOfClass:[UIWindowScene class]]) {
            UIViewController *rootVC = windowScene.keyWindow.rootViewController;
            if ([rootVC isKindOfClass:[RootViewController class]]) {
                RootViewController *vc = (RootViewController *)rootVC;
                vc.targetOrientation = orientation;
                [vc setNeedsUpdateOfSupportedInterfaceOrientations];
            }

            UIInterfaceOrientationMask orientationMask = (orientation == UIInterfaceOrientationLandscapeRight)
            ? UIInterfaceOrientationMaskLandscapeRight
            : (orientation == UIInterfaceOrientationLandscapeLeft)
            ? UIInterfaceOrientationMaskLandscapeLeft
            : UIInterfaceOrientationMaskPortrait;

            [windowScene requestGeometryUpdateWithPreferences:[[UIWindowSceneGeometryPreferencesIOS alloc] initWithInterfaceOrientations:orientationMask]
                                                 errorHandler:^(NSError * _Nonnull error) {
                NSLog(@"Failed to update geometry: %@", error);
            }];
        }
    }
}



@end
