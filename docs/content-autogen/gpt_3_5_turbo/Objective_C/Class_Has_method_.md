In Objective-C, you can check if a class has a particular method using the `respondsToSelector:` method. This method is typically used to check if a class or object can respond to a particular message or method call.

Here's a quick example:

```
// Let's say we have a class called "MyClass"
@interface MyClass : NSObject
- (void)myMethod;
@end

// We can check if the class "MyClass" has the method "myMethod" like this:
if ([MyClass respondsToSelector:@selector(myMethod)]) {
    NSLog(@"MyClass has the method myMethod");
} else {
    NSLog(@"MyClass does not have the method myMethod");
}
```

In this example, we're using the `respondsToSelector:` method to check if the `MyClass` class responds to the `myMethod` selector. If the class does have the method, we'll log out that it does. If not, we'll log out that it doesn't.

You can also use the `respondsToSelector:` method on an instance of a class to check if that particular object has a certain method implemented:

```
// Let's say we have an instance of "MyClass" called "myInstance"
MyClass *myInstance = [[MyClass alloc] init];

// We can check if "myInstance" has the method "myMethod" like this:
if ([myInstance respondsToSelector:@selector(myMethod)]) {
    NSLog(@"myInstance has the method myMethod");
} else {
    NSLog(@"myInstance does not have the method myMethod");
}
```

This will give us the same output as before, but now we're checking if the specific instance of the `MyClass` class has the `myMethod` method implemented.