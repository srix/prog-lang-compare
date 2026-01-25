To define a static method in MATLAB, you should use the following syntax:

```matlab
classdef className
    methods (Static)
        function outputVariable = methodName(inputVariable1, inputVariable2, ...)
            % code for the static method
        end
    end
end
```

Here is an example of how to define a static method `sumMethod` in a class `MathFun` to calculate the sum of two input variables:

```matlab
classdef MathFun
    methods (Static)
        function outputVariable = sumMethod(inputVariable1, inputVariable2)
            outputVariable = inputVariable1 + inputVariable2;
        end
    end
end
```

To use the static method, you can call it directly using the class name:

```matlab
result = MathFun.sumMethod(4, 7);
```

This will assign the value 11 to the variable `result`.