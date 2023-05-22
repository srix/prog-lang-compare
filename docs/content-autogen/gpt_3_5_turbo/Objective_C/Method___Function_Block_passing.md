In Objective-C, block passing is a powerful feature that allows us to pass blocks of code as arguments to methods or functions. When we pass a block of code to a method or function, the code is executed at a later time, often asynchronously.

Here is an example of using block passing in Objective-C to perform a simple asynchronous operation:

```objective-c
- (void)performAsyncOperation:(void (^)(void))completionHandler {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        // Perform the asynchronous operation here
        // ...
        
        if (completionHandler) {
            dispatch_async(dispatch_get_main_queue(), ^{
                // Call the completion handler on the main thread
                completionHandler();
            });
        }
    });
}
```

In this example, we define a method called `performAsyncOperation` that takes a block of code as its argument. Within the method, we use Grand Central Dispatch (GCD) to perform the asynchronous operation on a background queue. Once the operation is complete, we check if the `completionHandler` block is not nil, and if so, we execute it on the main thread.

Here is an example of how we can call this method:

```objective-c
[self performAsyncOperation:^{
    NSLog(@"Operation completed");
}];
```

In this example, we pass a block of code that simply logs a message when the operation completes.

Block passing can also be used to provide callbacks for handling events, like button taps or network requests. Here is an example of using block passing to handle a button tap event:

```objective-c
- (void)configureButton {
    UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 100, 50)];
    [button setTitle:@"Tap me" forState:UIControlStateNormal];
    [button addTarget:self action:@selector(handleButtonTap:) forControlEvents:UIControlEventTouchUpInside];
    [self.view addSubview:button];
}

- (void)handleButtonTap:(void (^)(void))completionHandler {
    // Perform some operation here
    // ...
    
    if (completionHandler) {
        completionHandler();
    }
}
```

In this example, we create a button and configure it to call the `handleButtonTap` method when it is tapped. The `handleButtonTap` method takes a block of code as its argument, which is executed when the operation is complete.

Here is an example of how we can use block passing to handle the button tap event:

```objective-c
[self configureButton];
    
[self handleButtonTap:^{
    NSLog(@"Button tapped");
}];
```

In this example, we call the `configureButton` method to create and display the button. We then call the `handleButtonTap` method and pass a block of code that simply logs a message when the button is tapped.