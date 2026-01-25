In MATLAB, you can return a value in a function using the `return` keyword. Here's an example:

```matlab
function output = myFunction(input)
% This function takes in an input and returns input squared

output = input^2;
end
```

In the example above, we're creating a function called `myFunction` that takes a single input parameter `input`. We then assign the squared value of `input` to the variable `output`, and finally use the `return` keyword to indicate that we want to return the value stored in `output`.

To use the `myFunction` function, we can simply call it:

```matlab
result = myFunction(5);
```

In this example, we're calling `myFunction` with an input of `5`, and assigning the result to the variable `result`. `result` should then contain the value `25`.