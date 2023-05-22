In C#, a closure is a function that captures and "closes over" its lexical scope. This means that a closure can access variables from the outer function that defined it, even after that function has completed execution. 

Here's an example of how to use closure in C#:

```csharp
// Define a function that returns a new function 
// that accepts an integer parameter and returns the sum of the parameter and the closure variable
public Func<int, int> AddToClosureVariable(int x)
{
    int closureVariable = 10;

    // Return a new function that has access to the closureVariable
    return num => num + closureVariable + x;
}

// Assign the returned function from AddToClosureVariable() to a variable
var add = AddToClosureVariable(5);

// Call the returned function, passing in an integer argument
var result = add(3); // result will be 18 (3 + 10 + 5)
```

In this example, `AddToClosureVariable()` creates and returns a new function that has access to the variable `closureVariable` defined within the outer function. When the returned function is executed later, it can access that variable even though `AddToClosureVariable()` has already completed execution.

The closure variable can be modified from within the closure function, and those changes will persist for subsequent calls to the closure function. Here's an example:

```csharp
// Define a function that returns a new function 
// that adds the parameter to the closure variable, and then returns the closure variable
public Func<int, int> AddAndReturnClosureVariable(int x)
{
    int closureVariable = 10;

    // Return a new function that modifies and returns the closureVariable
    return num =>
    {
        closureVariable += num + x;
        return closureVariable;
    };
}

// Assign the returned function from AddAndReturnClosureVariable() to a variable
var addAndReturn = AddAndReturnClosureVariable(5);

// Call the returned function, passing in an integer argument
var result1 = addAndReturn(3); // result1 will be 18 (10 + 3 + 5)

// Call the function again, with a different integer argument
var result2 = addAndReturn(4); // result2 will be 27 (18 + 4 + 5)
``` 

In this example, the returned function modifies the closure variable `closureVariable` each time it is executed. The updated value of the closure variable persists between function calls because it is captured by the closure.