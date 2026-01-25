To run a command in Objective-C, you would most likely use the `NSTask` class. Here is an example of how to run the "ls" command and print out its output:

```
NSTask *task = [[NSTask alloc] init];
[task setLaunchPath:@"/bin/ls"];
NSArray *arguments = [NSArray arrayWithObjects:@"/", nil];
[task setArguments:arguments];

NSPipe *pipe = [NSPipe pipe];
[task setStandardOutput:pipe];

[task launch];

NSData *data = [[pipe fileHandleForReading] readDataToEndOfFile];
NSString *output = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

NSLog(@"%@", output);
```

In this example, we create an `NSTask` object and set its launch path to "/bin/ls", which is the path to the "ls" command. We also set the arguments to be an `NSArray` containing just "/", which specifies that we want to list the contents of the root directory.

We then create an `NSPipe` object and set the task's standard output to be the pipe. This allows us to capture the output of the command.

Finally, we launch the task and read the output from the pipe into an `NSString` object, which we print to the console using `NSLog`.

Note that running commands in this way can be a security risk if you are taking input from untrusted sources, since it allows the user to execute arbitrary code on the system. It is important to carefully validate any input you receive before passing it to the `NSTask` object.