In MATLAB, a function or method can be declared using the `function` keyword. Here are two examples, one for declaring a function and one for declaring a method:

### Function Declaration:

```matlab
function [outputArg1,outputArg2] = functionName(inputArg1,inputArg2)
%FUNCTIONNAME Summary of this function goes here
%   Detailed explanation goes here
outputArg1 = inputArg1 + inputArg2;
outputArg2 = inputArg1 - inputArg2;
end
```

This function named "functionName" takes two input arguments and returns two output arguments. The function adds the two input arguments and assigns the result to outputArg1, and subtracts the second input argument from the first and assigns the result to outputArg2.

### Method Declaration:

```matlab
classdef ClassName
    methods
        function output = methodName(obj, input)
        %METHODNAME Summary of this method goes here
        %   Detailed explanation goes here
        output = input*2;
        end
    end
end
```

This method named "methodName" takes an object and an input argument and returns an output. The method multiplies the input by 2 and assigns the result to the output. The method is defined within a class named "ClassName".