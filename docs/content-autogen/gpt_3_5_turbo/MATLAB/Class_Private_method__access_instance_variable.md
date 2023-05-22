In MATLAB, instance variables can be accessed within private methods using the `obj` keyword - an implicit reference to the current object instance.

Here is an example of a class with a private method that accesses the instance variable:

```matlab
classdef MyClass
   properties (Access = private)
      myVar = 10;
   end
   
   methods (Access = private)
      function myPrivateMethod(obj)
         disp(['The value of myVar is: ' num2str(obj.myVar)]);
      end
   end
end
```

In this example, we have defined a private method `myPrivateMethod` that uses the `obj` keyword to access the private instance variable `myVar` and display its value.

To use this private method, we can create an instance of the `MyClass` object and call the method using the dot notation:

```matlab
mc = MyClass();
mc.myPrivateMethod();
```

This will output the following:

```
The value of myVar is: 10
```

Note that private methods can only be accessed by other methods within the same class definition, and cannot be called directly outside the class.