In MATLAB, you can initialize a method or function at runtime by creating an anonymous function. An anonymous function is a function that is not defined in a separate file or script, but rather created on the fly using the "function handle" syntax. 

Here is a simple example of initializing a function in runtime using an anonymous function:

```
f = @(x) 2*x + 1;
```

This line of code creates an anonymous function that takes one input variable "x" and returns the output value "2*x + 1". You can now call this function by passing in a value for "x" like this:

```
y = f(2);
```

This will return the value of "y" as 5, since "f(2)" evaluates to "2*2 + 1" which is equal to 5. 

Similarly, you can also initialize a method at runtime using an anonymous method like this:

```
obj.method = @(x) obj.property + x;
```

Here, we are creating an anonymous method that takes one input variable "x" and returns the sum of the property "obj.property" and the input "x". This anonymous method is then assigned to the "obj.method" property. When this method is called, it will use the current value of "obj.property" and the value of the input "x" to compute the output value. 

Note that anonymous functions and methods are particularly useful when you need to pass a function as an argument to another function, or when you need to define a function inside a loop or conditional statement.