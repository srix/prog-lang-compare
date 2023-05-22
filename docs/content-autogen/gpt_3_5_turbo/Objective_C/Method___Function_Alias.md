Alias in Objective-C allows a programmer to create an alias (alternative name) for an existing class or method. It can be helpful when you want to refer to a lengthy class name with a shorter one or when you want to provide a more intuitive name for a method.

Here's how you can use alias in Objective-C:

1. Creating an alias for a class:

```objective-c
@class MyLongClassName;

// Define the alias
typedef MyLongClassName MyShortName;

// Use the alias
MyShortName *obj = [[MyShortName alloc] init];
```
In this example, we define an alias ‘MyShortName` for `MyLongClassName`. Now, we can use `MyShortName` instead of the full class name.

2. Creating an alias for a method:

```objective-c
@interface MyClass : NSObject

// Define the method
- (void)longMethodName:(NSString *)parameter;

@end

// Create an alias for the method
@protocol MyProtocol <NSObject>

@optional
- (void)shortName:(NSString *)parameter;

@end

// Implement the method using the alias
@implementation MyClass

- (void)shortName:(NSString *)parameter
{
    [self longMethodName:parameter];
}

@end
```
In this example, we define an alias `shortName` for the existing method `longMethodName`. Now, we can use the more intuitive name to call the method.

These are just basic examples of how to use alias in Objective-C. It's important to use descriptive names for aliases to avoid confusion with other classes or methods in the program.