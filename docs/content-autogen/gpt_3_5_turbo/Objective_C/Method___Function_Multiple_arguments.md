In Objective-C, you can use multiple arguments in a method or function by declaring them within the parentheses after the method name. Each argument is separated by a comma. Here is an example of a method that takes two arguments:

```
- (void)printFullName:(NSString *)firstName lastName:(NSString *)lastName {
    NSLog(@"Full Name: %@ %@", firstName, lastName);
}
```

In this example, the method is named "printFullName" and it takes two arguments: "firstName" and "lastName", both of which are of type NSString. Within the method body, the arguments are concatenated and printed to the console.

To call this method, you would use the following syntax:

```
[self printFullName:@"John" lastName:@"Doe"];
```

This passes in two string arguments, "John" and "Doe", to the "printFullName" method. The output to the console would be:

```
Full Name: John Doe
```

You can use multiple arguments of different types in a similar way by specifying the type of each argument before its name in the method declaration. For example:

```
- (int)addNumber:(int)number1 toNumber:(int)number2 {
    return number1 + number2;
}
```

This method takes two integer arguments ("number1" and "number2") and returns their sum. To call this method, you would use the following syntax:

```
int sum = [self addNumber:10 toNumber:20];
```

This passes in two integer arguments, 10 and 20, to the "addNumber" method and stores the result (30) in the variable "sum".