In Objective-C, try/catch/finally are used to handle runtime errors that may occur during the execution of your program. The try keyword is used to enclose the code block where an exception may occur. The catch keyword is used to catch the exception that was thrown and perform error handling. Finally is an optional block of code that is always executed, regardless of whether an exception is thrown or not. It can be useful for performing cleanup operations like releasing resources, closing files etc.

Here is an example of using try/catch/finally in Objective-C:

```
@try {
  // Code block where exception may occur
  NSFileManager *fileManager = [NSFileManager defaultManager];
  NSString *filePath = @"path/to/your/file.txt";
  BOOL fileExists = [fileManager fileExistsAtPath:filePath];
  
  if (fileExists) {
    // Do something with the file
  } else {
    // Throw an exception
    NSException *fileNotFoundException = [NSException exceptionWithName:@"FileNotFoundException" reason:@"File does not exist" userInfo:nil];
    @throw fileNotFoundException;
  }
}
@catch(NSException *exception) {
  // Handle the exception
  NSLog(@"%@", [exception description]);
}
@finally {
  // Cleanup code
  NSLog(@"Cleanup operations here");
}
```

In this example, we are checking if a file exists at a specific path in the file system. If the file exists, we can do something with it. However, if the file does not exist, we throw a FileNotFoundException exception. The catch block then catches this exception and logs the description of the exception. Finally block will always be executed regardless of the exception thrown or not. 

Try/catch/finally are essential tools for managing runtime errors in Objective-C and they can help prevent your program from crashing and provide helpful feedback to the user about what went wrong.