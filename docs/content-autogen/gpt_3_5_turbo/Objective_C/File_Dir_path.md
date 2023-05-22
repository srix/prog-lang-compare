In Objective-C, we can use the `NSFileManager` class to obtain the path of the directory with the following method:

```objective-c
+ (NSString *)pathForDirectory:(NSSearchPathDirectory)directory
       inDomains:(NSSearchPathDomainMask)domainMask;
```

Here, `directory` is the search path directory to find, and `domainMask` is the domain where you want to search. It returns the path of the directory we want as an NSString object.

Here's an example showing how to get the Documents directory path:

```objective-c
NSArray *dirPaths;
NSString *docsDir;

// Get the directory paths
dirPaths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);

// Get the Documents directory
docsDir = [dirPaths objectAtIndex:0];

NSLog(@"Documents directory path: %@", docsDir);
```

In this example, we first obtain an array of directory paths using the `NSSearchPathForDirectoriesInDomains` function, passing the `NSDocumentDirectory` constant to specify the Documents directory. We then get the first element of the array to obtain the Documents directory path and log it.