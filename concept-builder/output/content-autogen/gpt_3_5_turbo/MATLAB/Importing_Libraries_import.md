MATLAB is an environment that provides a lot of built-in functions, but sometimes we need to use external libraries to enhance the functionality of our code and solve more complex problems.

To import a library in MATLAB, we use the `addpath` function. This function adds the folder containing the library to the search path of MATLAB. Once the library is added to the search path, we can use its functions and classes in our code.

Here is an example of how to import the `Statistics and Machine Learning Toolbox` in MATLAB:

```matlab
addpath('C:\Program Files\MATLAB\R2021a\toolbox\stats')
```

In this example, we added the folder containing the `Statistics and Machine Learning Toolbox` to the search path. Now we can use the functions and classes from this toolbox in our code.

Another example, if we want to use functions from a library located in the current working directory of our MATLAB project, we can use the relative path:

```matlab
addpath('mylib')
```

In this code block, we added the library named `mylib` that is located in the current working directory of our MATLAB project to the search path.

Once we have added the library with `addpath`, we can use its functions and classes in our code. For example, suppose we have a library called `mylib` containing a function `myfunc`. We can use this function in our code as follows:

```matlab
% Import the library
addpath('mylib')

% Call the function
result = myfunc(argument1, argument2);
```

In this code block, we added the library `mylib` to the search path using `addpath` and then called the function `myfunc` from this library, passing two arguments (`argument1` and `argument2`). The result of the function is stored in the variable `result`.

By using external libraries, we can expand the functionality of MATLAB and solve more complex problems.