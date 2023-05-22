To get the parent directory path in Objective-C, you can use the `stringByDeletingLastPathComponent` method on an `NSString` object containing the path of the current directory. This will return a new `NSString` object containing the path of the parent directory.

Here's an example code snippet:

```objective-c
NSString *currentPath = @"/Users/johndoe/Documents/Work";
NSString *parentPath = [currentPath stringByDeletingLastPathComponent];
NSLog(@"Parent directory path: %@", parentPath);
```

Output:

```
Parent directory path: /Users/johndoe/Documents
```

In this example, the `currentPath` variable contains the path of the current directory. The `stringByDeletingLastPathComponent` method is called on this string to obtain the path of the parent directory, which is then stored in the `parentPath` variable. Finally, the `NSLog` function is used to print the parent directory path to the console.