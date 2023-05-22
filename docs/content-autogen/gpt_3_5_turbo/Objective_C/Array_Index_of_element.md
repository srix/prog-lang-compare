In Objective-C, you can use the `indexOfObject:` method of an NSArray object to get the index of an element in the array. Here is an example:

Suppose we have an array called `myArray` that contains some strings:

```objective-c
NSArray *myArray = @[@"apple", @"banana", @"cherry", @"date"];
```

To get the index of the string "cherry" in the array, we can use the `indexOfObject:` method like this:

```objective-c
NSUInteger index = [myArray indexOfObject:@"cherry"];
```

The `indexOfObject:` method returns the index of the object in the array, or NSNotFound if the object is not in the array. In this case, the variable `index` will be set to 2, since "cherry" is at index 2 in the array.

Here is another example that shows how to use the `indexOfObject:` method to find the index of a custom object in an array:

Suppose we have a class called `Person` that represents a person with a name and an age, and we have an array called `people` that contains some `Person` objects:

```objective-c
@interface Person : NSObject

@property (nonatomic, strong) NSString *name;
@property (nonatomic) NSInteger age;

- (instancetype)initWithName:(NSString *)name age:(NSInteger)age;

@end

@implementation Person

- (instancetype)initWithName:(NSString *)name age:(NSInteger)age {
    self = [super init];
    if (self) {
        _name = name;
        _age = age;
    }
    return self;
}

@end

NSArray *people = @[[[Person alloc] initWithName:@"Alice" age:25],
                    [[Person alloc] initWithName:@"Bob" age:30],
                    [[Person alloc] initWithName:@"Charlie" age:35]];
```

To find the index of the person with name "Bob" in the array, we can use the `indexOfObject:` method like this:

```objective-c
Person *bob = [[Person alloc] initWithName:@"Bob" age:30];
NSUInteger index = [people indexOfObject:bob];
```

The `indexOfObject:` method uses the `isEqual:` method of `Person` objects to compare them, so we need to make sure that the `isEqual:` method is properly implemented in the `Person` class for this to work correctly.