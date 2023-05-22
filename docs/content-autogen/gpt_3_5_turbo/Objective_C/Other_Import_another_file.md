To import another file in Objective-C, you use the `#import` preprocessor directive. This directive instructs the compiler to import the header file of another file, which allows you to use the classes, functions, and variables defined in that file.

Here's an example of how to import a file named `MyClass.h`:

```
#import "MyClass.h"
```

Assuming `MyClass` is declared in `MyClass.h`, you can now use it in your current file. For example:

```
MyClass *myObject = [[MyClass alloc] init];
[myObject doSomething];
```

Note that you should only import the header file of a class, not its implementation file. The implementation file should be included in your project's target, but not explicitly imported in your code.

If you're working with frameworks, you may need to use a slightly different syntax. For example, to import the `UIKit` framework in your code, you would use:

```
#import <UIKit/UIKit.h>
```

This syntax indicates that the file you're importing is part of a framework, rather than a file within your own project.