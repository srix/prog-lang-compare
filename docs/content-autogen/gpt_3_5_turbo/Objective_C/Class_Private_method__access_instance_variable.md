In Objective-C, instance variables can be accessed in a private method by using self keyword or instance variable directly. 

Here's an example:

```
@interface MyClass : NSObject {
    int myNumber;
}

@end

@implementation MyClass

- (void)doSomethingPrivate {
    NSLog(@"My private number is %d", myNumber);
    // or
    NSLog(@"My private number is %d", self->myNumber);
}

@end
```

In this example, we have defined a private method `doSomethingPrivate` that is able to access the instance variable `myNumber` by using either `self->myNumber` or just `myNumber`. 

Please note that while this technique can be used to access instance variables in private methods, it is generally not considered good practice to expose properties or instance variables directly in this way. Instead, it is recommended to use accessor methods to manipulate the properties.