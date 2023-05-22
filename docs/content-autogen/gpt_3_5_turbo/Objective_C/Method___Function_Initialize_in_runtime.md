In Objective-C, you can initialize a method or function at runtime using dynamically loaded Objective-C code. Objective-C provides a method called `class_addMethod` that allows you to add a new method to a class at runtime. Here's an example:

```
#import <objc/runtime.h>

// define a new method
void dynamicMethodIMP(id self, SEL _cmd)
{
    NSLog(@"New dynamic method");
}

// add the new method to a class at runtime
Class classToAddMethodTo = [SomeClass class];
SEL selector = @selector(newMethod);
IMP implementation = (IMP)dynamicMethodIMP;

if (!class_addMethod(classToAddMethodTo, selector, implementation, "v@:"))
{
    NSLog(@"Failed to add new method");
}
else
{
    NSLog(@"New method added successfully");
}
```

In this example, we define a new method called `dynamicMethodIMP` that takes an object `self` and a selector `_cmd` as its parameters. We then use the `class_addMethod` method to add this method to the `SomeClass` class. The `selector` parameter specifies the name of the method, the `implementation` parameter specifies the actual implementation of the method, and the `"v@:"` parameter specifies the method type encoding.

Once the method has been added, we can call it like any other method:

```
SomeClass *obj = [[SomeClass alloc] init];
[obj newMethod];
```

This will call the dynamically added `dynamicMethodIMP` method. Note that it's important to use a unique selector name to avoid conflicts with existing method names.