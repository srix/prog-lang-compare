To get the file path in Objective-C, you can use the `NSFileManager` class which allows you to perform operations on files and directories. Here is an example code snippet that demonstrates how to get the file path using `NSFileManager`:

```objective-c
NSString *filePath = [[NSBundle mainBundle] pathForResource:@"example" ofType:@"txt"];

NSLog(@"File path: %@", filePath);
```

In the above example, we are using the `pathForResource:ofType:` method of `NSBundle` which returns the full file path of a resource in the main bundle with the specified name and file extension. In this case, it is looking for a file named "example.txt" in the main bundle.

Another way to get the file path is to use the `URLForDirectory:inDomain:appropriateForURL:create:error:` method of `NSFileManager` which creates a file URL for the specified common directory in the given domain. Here is an example:

```objective-c
NSFileManager *fileManager = [NSFileManager defaultManager];

NSError *error = nil;
NSURL *documentDirectoryURL = [fileManager URLForDirectory:NSDocumentDirectory inDomain:NSUserDomainMask appropriateForURL:nil create:NO error:&error];

if (error) {
    NSLog(@"Error: %@", error.localizedDescription);
} else {
    NSLog(@"Document directory URL: %@", documentDirectoryURL.path);
}
```

In this example, we are getting the path for the user's document directory using the `URLForDirectory:inDomain:appropriateForURL:create:error:` method of `NSFileManager`. If there is an error, we log the error message. Otherwise, we log the path to the document directory.