In Objective-C, a method or function can return a value by using the `return` statement. The returned value can be of any data type including int, float, char, object, or even a pointer. Here are a few examples:

Example 1: A method that returns an integer value

```
- (int)findSum:(int)a :(int)b {
    int sum = a + b;
    return sum;
}
```
In the above example, the `findSum` method takes in two integer values and returns their sum. The `return` statement is used to return the calculated sum.

Example 2: A function that returns a string value

```
NSString* message() {
    return @"Hello, World!";
}
```
In the above example, the `message` function returns a string value `Hello, World!`. The `return` statement is used to return the string value.

Example 3: A method that returns an object

```
- (UIViewController *)viewControllerAtIndex:(NSUInteger)index {
    // create and return a view controller object
    return [[MyViewController alloc] initWithIndex:index];
}
```
In the above example, the `viewControllerAtIndex` method returns a view controller object of type `MyViewController`. The `return` statement is used to return the view controller object.

In summary, the `return` statement is used to return a value from methods or functions in Objective-C. The returned value can be of any data type and is used to provide an output from the method or function to the calling code.