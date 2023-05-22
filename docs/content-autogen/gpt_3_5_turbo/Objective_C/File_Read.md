Reading a file in Objective-C can be achieved using the `NSFileManager` and `NSData` classes. Here's an example of how to read a file:

```objective-c
// Get the file path
NSString *filePath = [[NSBundle mainBundle] pathForResource:@"myFile" ofType:@"txt"];

// Read the file into an NSData object
NSData *data = [NSData dataWithContentsOfFile:filePath];

// Convert the data into an NSString
NSString *stringData = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

// Print the contents of the file
NSLog(@"File Contents : %@", stringData);
```

In the example above, we first obtain the file path where the file is stored using the `pathForResource:ofType:` method of `NSBundle`. Then we read the contents of the file into an `NSData` object using the `dataWithContentsOfFile:` method of `NSData`. Finally, we convert the data into an NSString using the `initWithData:encoding:` method of `NSString` and print its contents using `NSLog`.