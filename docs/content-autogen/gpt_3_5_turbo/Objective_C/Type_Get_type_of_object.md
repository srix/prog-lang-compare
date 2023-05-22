In Objective-C, you can get the type of an object in several ways:

1. Using the `class` method:
```
id obj = @"Hello, World!";
Class objClass = [obj class];
NSLog(@"Object is of type: %@", NSStringFromClass(objClass));
```
Output: Object is of type: __NSCFConstantString

In this example, we are using the `class` method to get a reference to the class of the `obj` object, and then we are using the `NSStringFromClass` function to get the name of the class as a string. The `id` type is a generic type that represents any object.

2. Using the `isKindOfClass` method:
```
id obj = @"Hello, World!";
if ([obj isKindOfClass:[NSString class]]) {
    NSLog(@"Object is a string.");
} else {
    NSLog(@"Object is not a string.");
}
```
Output: Object is a string.

In this example, we are using the `isKindOfClass` method to check if the `obj` object is an instance of the `NSString` class. If the object is of that class or a subclass of it, the method returns `YES`.

3. Using the `isMemberOfClass` method:
```
id obj = @"Hello, World!";
if ([obj isMemberOfClass:[NSString class]]) {
    NSLog(@"Object is an NSString instance.");
} else {
    NSLog(@"Object is not an NSString instance.");
}
```
Output: Object is an NSString instance.

In this example, we are using the `isMemberOfClass` method to check if the `obj` object is an instance of the `NSString` class. If the object is of that class only, the method returns `YES`. 

Overall, these examples demonstrate different approaches to getting the type of an object in Objective-C.