In MATLAB, you can check whether a class has a method or not using the "methods" function. The syntax for the function is as follows:

```matlab
methods(classname)
```

Here "classname" is the name of the class whose methods you want to examine. The function returns a list of all the methods available in the specified class.

Here is an example code showing how to use the methods function in MATLAB:

```matlab
% Define a class
classdef MathOperations
   methods
      function result = add(obj, a, b)
         result = a + b;
      end
      function result = subtract(obj, a, b)
         result = a - b;
      end
   end
end

% Check the available methods
methods('MathOperations')
```

When you run the above code, it will display the following result:

```
Methods for class MathOperations:

MathOperations/add
MathOperations/subtract
``` 

As you can see, both the "add" and "subtract" methods of the "MathOperations" class are listed here.