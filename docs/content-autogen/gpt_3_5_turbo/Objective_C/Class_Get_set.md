Getters and setters are methods that are used to enable the accessing and updating of an object’s instance variables. In Objective-C, getters and setters are typically created using the @property and @synthesize keywords.

Here's an example of how to use get/set in a class in Objective-C:

```
// MyClass.h file
@interface MyClass : NSObject

@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) NSInteger age;

@end


// MyClass.m file
@implementation MyClass

@synthesize name = _name;
@synthesize age = _age;

- (NSString *)name {
    return _name;
}

- (void)setName:(NSString *)newName {
    _name = [newName copy];
}

- (NSInteger)age {
    return _age;
}

- (void)setAge:(NSInteger)newAge {
    _age = newAge;
}

@end


// Example usage
MyClass *myObject = [[MyClass alloc] init];

// setting property values
[myObject setName:@"John"];
[myObject setAge:30];

// getting property values
NSString *name = [myObject name];
NSInteger age = [myObject age];
```

In the example above, we are declaring a class named `MyClass` with two instance variables, `name` and `age`, and creating get/set methods for both of them using `@property` and `@synthesize`. Then, we are creating an instance of `MyClass` and setting and getting values for the `name` and `age` properties using the setter and getter methods that we defined.