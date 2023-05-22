In Objective-C, a constructor is a special method that is used to initialize an instance of a class. It is also referred to as an initializer. A constructor is called when an instance of a class is created.

There are two types of constructors in Objective-C:

1. Default Constructor: This is a constructor that is created automatically by the compiler if no other constructor is defined. It initializes all the instance variables of a class with default values.

2. Custom Constructor: This is a constructor that is defined by the programmer to initialize the instance variables of a class with custom values.

Here's an example of a custom constructor:

```
@interface Person : NSObject

@property NSString *name;
@property int age;

@end

@implementation Person

- (instancetype)initWithName:(NSString *)name andAge:(int)age {
   self = [super init];
   
   if (self) {
      _name = name;
      _age = age;
   }
   
   return self;
}

@end
```

In the above example, the `initWithName:andAge:` method is a custom constructor that takes two parameters: name and age. The `instancetype` keyword is used to indicate that the return type of this method is an instance of the class. 

The super class's designated initializer is being used as `self = [super init]`. 

Inside the constructor, the instance variables, `_name` and `_age`, are initialized with the values of the parameters passed to the constructor. If the constructor fails to initialize the variables, it returns nil. 

This custom constructor can then be used to instantiate objects of the Person class like so:

```
Person *john = [[Person alloc] initWithName:@"John" andAge:25];
Person *jane = [[Person alloc] initWithName:@"Jane" andAge:30];
```

In the above example, two instances of the Person class are created using the custom constructor, `initWithName:andAge:`. The variables, `john` and `jane`, are initialized with custom values for name and age.