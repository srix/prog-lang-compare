To declare a class in Objective-C, you use the `@interface` keyword followed by the name of the class, braces, and a list of instance variables and method declarations. Here is an example of declaring a class in Objective-C:

```
@interface MyClass : NSObject

@property (nonatomic, strong) NSString *name;

- (void)sayHello;

@end
```

In this example, we are declaring a class called `MyClass` that inherits from the `NSObject` class. We have also declared an instance variable called `name` and a method called `sayHello`.

The `@property` declaration is a shorthand syntax for declaring instance variables with their accompanying getter/setter methods. In this case, we are declaring an instance variable called `name` that is of type `NSString` and has a `strong` memory management attribute.

The `sayHello` method is a simple method that does not return a value and takes no arguments. Its implementation would be defined in the `@implementation` block for the class.

Once you have declared a class, you can then create instances of it and call its methods using the dot notation syntax. For example:

```
MyClass *myObject = [[MyClass alloc] init];
myObject.name = @"John";
[myObject sayHello];
```