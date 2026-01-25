In Objective-C, inheritance is used to create a new class from an existing class. The new class, referred to as the subclass, inherits properties and methods from the existing class, referred to as the superclass. This allows for code reuse and simplifies the code structure.

To use inheritance in Objective-C, you can declare a subclass with the keyword "subclass" followed by the name of the subclass and the name of the superclass in brackets. For example:

```
@interface Animal : NSObject
@property NSString* name;
-(void)makeSound;
@end

@interface Cat : Animal
@end
```

In the above example, the `Cat` class is a subclass of `Animal`. This means that the `Cat` class will inherit the `name` property and `makeSound` method from the `Animal` class.

You can also override methods in the subclass to provide custom functionality. For example:

```
@implementation Cat
- (void)makeSound {
    NSLog(@"Meow");
}
@end
```

In the above example, we override the `makeSound` method inherited from `Animal` with a custom implementation that outputs "Meow" when called on a `Cat` object.

Now you can create `Cat` instances and use both the inherited and overridden properties and methods:

```
Cat *fluffy = [[Cat alloc] init];
fluffy.name = @"Fluffy";
[fluffy makeSound];
```

This will output "Meow" in the console.

In conclusion, inheritance is a powerful feature in Objective-C that allows for code reuse and simplifies the code structure. It is achieved by declaring a subclass with the name of the subclass and the name of the superclass in brackets followed by overriding methods to provide custom functionality.