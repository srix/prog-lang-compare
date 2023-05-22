In Objective-C, private methods are used to restrict access to the methods within a particular class. Private methods are declared in the implementation file (.m file) of the class and are not accessible from outside of the class. 

Here's an example:

```
// MyClass.h file
@interface MyClass : NSObject
// public method declaration
- (void)publicMethod;
@end

// MyClass.m file
@interface MyClass ()
// private method declaration
- (void)privateMethod;
@end

@implementation MyClass
- (void)publicMethod {
    // call private method
    [self privateMethod];
}

- (void)privateMethod {
    // implementation of private method
}
@end
```

In this example, `MyClass` is the class with two methods, `publicMethod` and `privateMethod`. `publicMethod` is declared in the header file (.h file) and is accessible from outside of the class. `privateMethod` is declared in the implementation file (.m file) with a category that has no name, and it is not accessible from outside of the class.

To call the `privateMethod` from within the `MyClass`, `self` is used to reference the object itself, and the method is called in the `publicMethod`.

```
MyClass *myObject = [[MyClass alloc] init];
[myObject publicMethod]; // invokes privateMethod
```

Creating private methods in Objective-C is relatively simple, and they can be useful when you want to keep the internal implementation of a class hidden from outside classes to avoid unintended modifications or use. However, it's essential to note that private methods can still be called using runtime functions, so they are not 100% secure.