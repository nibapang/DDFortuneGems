

#import <UIKit/UIKit.h>


@interface RootViewController : UIViewController {

}
@property (nonatomic, assign) UIInterfaceOrientation targetOrientation;
- (BOOL)prefersStatusBarHidden;
+ (RootViewController *)sharedInstance;
@end
