In C++, we can set default values for a function or method's arguments. This helps simplify function calls by allowing us to specify only the values that we need, and let the others default to a predefined value.

Here is an example of a function with default arguments:

```
void printMessage(std::string message, int numberOfTimes = 1) {
    for (int i = 0; i < numberOfTimes; i++) {
        std::cout << message << std::endl;
    }
}
```

In this example, we have defined a function called `printMessage` that takes two arguments: `message` and `numberOfTimes`. The second argument, `numberOfTimes`, has a default value of `1`.

We can call this function in a couple of ways:

```
// Call with both arguments
printMessage("Hello World", 3);

// Call with only the first argument
printMessage("Hello World");

// Call with only the second argument
printMessage("Goodbye World", 5);
```

In the first example, we call the function and specify both arguments. In the second example, we call the function and don't specify the second argument, so it defaults to `1`. In the third example, we call the function and specify only the second argument, so the first argument defaults to `"Hello World"`.

Note that when specifying default values for arguments, we should start with the rightmost argument and move leftward. This is because once we specify a value for an argument, we must specify values for all arguments to the right of it. So, if we have a function with two arguments, we must specify a value for the second argument if we want to specify a value for the first argument with a default value.

```
// Invalid - cannot specify a default value for a leftward argument
void doSomething(int numberOfTimes = 2, std::string message) {
    // ...
}
``` 

```
// Valid - we can specify a default value for the rightward argument
void doSomething(std::string message, int numberOfTimes = 2) {
    // ...
}
```