To write a file in Objective-C, you need to follow these steps:

Step 1: Create an instance of the NSFileManager class. This class provides methods to create, delete, move and copy files in a file system.

```
NSFileManager *fileManager = [NSFileManager defaultManager];
```

Step 2: Define the path to the file you want to create. You can use the `NSSearchPathForDirectoriesInDomains` method to access the application’s Documents directory.

```
NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
NSString *documentsDirectory = [paths objectAtIndex:0];
NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"example.txt"];
```

Step 3: Define the content that you want to write to the file.

```
NSString *textToWrite = @"This is an example text to write in the file.";
```

Step 4: Write the file using the `writeToFile` method of the NSString class.

```
BOOL success = [textToWrite writeToFile:filePath atomically:YES encoding:NSUTF8StringEncoding error:&error];
if (!success) {
    NSLog(@"Failed to write to file %@", error);
}
```

This method writes the content of the `textToWrite` string to the specified file path. If the `atomically` parameter is set to YES, the method writes the file atomically. This means that the file is first written to a temporary file and then moved to its final destination once writing is complete, ensuring that the file write operation is completed successfully or not at all.

Here is the complete code example:

```
NSFileManager *fileManager = [NSFileManager defaultManager];

NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
NSString *documentsDirectory = [paths objectAtIndex:0];
NSString *filePath = [documentsDirectory stringByAppendingPathComponent:@"example.txt"];

NSString *textToWrite = @"This is an example text to write in the file.";

BOOL success = [textToWrite writeToFile:filePath atomically:YES encoding:NSUTF8StringEncoding error:&error];
if (!success) {
    NSLog(@"Failed to write to file %@", error);
}
```

This code creates a file named `example.txt` in the Documents directory of the application and writes the text content to it.