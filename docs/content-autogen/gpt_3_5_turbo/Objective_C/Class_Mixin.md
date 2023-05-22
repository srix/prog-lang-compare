In Objective-C, a mixin is a category with an associated protocol that describes its required methods. It allows for sharing of code between classes without creating inheritance hierarchies.

Here's an example of creating a mixin in Objective-C:

```
@protocol MyMixinProtocol
- (void)doSomething;
@end

@interface MyMixin : NSObject <MyMixinProtocol>
- (void)doSomething;
@end

@implementation MyMixin
- (void)doSomething {
    NSLog(@"Mixin doing something");
}
@end
```

In this example, we define a protocol `MyMixinProtocol` that requires its adopters to implement a method `doSomething`. We then create a class `MyMixin` that adopts the protocol and implements the method accordingly.

Now, let's say we want to "mix in" `MyMixin` functionality to another class `MyClass`:

```
@interface MyClass : NSObject <MyMixinProtocol>
@end

@implementation MyClass
- (void)doSomething {
    // Implement method from MyMixinProtocol
}

// The rest of MyClass implementation...
@end
```

We simply make `MyClass` adopt the same protocol as `MyMixin`, which allows it to use the `doSomething` method. We can additionally import the `MyMixin` class and use it to create an instance variable or call its methods directly.

Using a mixin allows us to reuse code across different class hierarchies. We can create multiple mixins for different sets of functionality, and apply them to any class that adopts the required protocol.