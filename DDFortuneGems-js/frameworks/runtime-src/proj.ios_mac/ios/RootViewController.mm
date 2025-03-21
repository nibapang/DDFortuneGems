

#import "RootViewController.h"
#import "cocos2d.h"

#include "platform/CCApplication.h"
#include "platform/ios/CCEAGLView-ios.h"

static RootViewController *sharedRootViewController;

@implementation RootViewController
+ (RootViewController *)sharedInstance
{
    return  sharedRootViewController;
}

// Implement loadView to create a view hierarchy programmatically, without using a nib.
- (void)loadView {
    // Set EAGLView as view of RootViewController
    self.view = (__bridge CCEAGLView *)cocos2d::Application::getInstance()->getView();
    sharedRootViewController = self;
}

// Implement viewDidLoad to do additional setup after loading the view, typically from a nib.
- (void)viewDidLoad {
    [super viewDidLoad];
}

- (void)viewWillAppear:(BOOL)animated {
    [super viewWillAppear:animated];
}

- (void)viewDidDisappear:(BOOL)animated {
    [super viewDidDisappear:animated];
}


- (UIInterfaceOrientationMask)supportedInterfaceOrientations {
        return (self.targetOrientation == UIInterfaceOrientationLandscapeLeft ||
                self.targetOrientation == UIInterfaceOrientationLandscapeRight)
                ? UIInterfaceOrientationMaskLandscapeRight
                : UIInterfaceOrientationMaskPortrait;
}



- (void)didRotateFromInterfaceOrientation:(UIInterfaceOrientation)fromInterfaceOrientation {
    [super didRotateFromInterfaceOrientation:fromInterfaceOrientation];
}

//fix not hide status on ios7
- (BOOL)prefersStatusBarHidden {
    return YES;
}

// Controls the application's preferred home indicator auto-hiding when this view controller is shown.
- (BOOL)prefersHomeIndicatorAutoHidden {
    return YES;
}

- (void)didReceiveMemoryWarning {
    // Releases the view if it doesn't have a superview.
    [super didReceiveMemoryWarning];

    // Release any cached data, images, etc that aren't in use.
}


@end
