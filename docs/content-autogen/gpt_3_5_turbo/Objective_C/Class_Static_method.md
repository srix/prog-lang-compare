In Objective-C, you can define a static method in a class using the following syntax:

```
@implementation ClassName

+ (returnType)methodName:(paramType)paramName {
    // code for method
}

@end
```

Here's an example of a class with a static method:

```
@implementation Math

+ (int)add:(int)a to:(int)b {
    return a + b;
}

@end
```

In this example, the `Math` class has a static method called `add:to:` that takes two `int` parameters and returns their sum. You can call this method from anywhere in your app using the class name and the method name like this:

```
int sum = [Math add:5 to:10];
```

In this example, the `add:to:` method is called on the `Math` class with the parameters `5` and `10`, and the result is stored in the `sum` variable.