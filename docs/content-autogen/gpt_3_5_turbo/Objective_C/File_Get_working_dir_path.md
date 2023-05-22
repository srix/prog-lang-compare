To get the working directory path in Objective-C, you can use the `NSFileManager` class. Below is an example code snippet that demonstrates how to get the working directory path:

```
#import <Foundation/Foundation.h>

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        
        NSFileManager *fileManager = [NSFileManager defaultManager];
        NSURL *url = [NSURL fileURLWithPath:[fileManager currentDirectoryPath]];
        NSError *error;
        NSString *path = [url path];
        
        if (error) {
            NSLog(@"Error:%@", error);
        } else {
            NSLog(@"Working directory path:%@", path);
        }
        
    }
    return 0;
}
```

Explanation: 

1. We import Foundation framework
2. We create an `NSFileManager` object.
3. We create an `NSURL` object by passing the `NSFileManager's` `currentDirectoryPath` method.
4. We create an `NSError` instance, which will be used to log any errors that may occur.
5. Finally, we retrieve the path from the URL and logging it to the console.

This code snippet gets the current working directory (`NSFileManager's currentDirectoryPath`), creates an NSURL object from the path, gets the path from the URL object, and logs it to the console. If there is an error, it will also log that error to the console.