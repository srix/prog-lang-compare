A constructor in MATLAB is a special method that is used to create objects of a particular class. When an object is created, the constructor performs certain initialization tasks, such as setting default property values, allocating memory, or initializing variables.

To use a constructor in MATLAB, you need to define a class with a constructor method that is called automatically when an object is created. Here is an example of how to define a class with a constructor:

```matlab
classdef MyClass
   properties
      x
   end
   methods
      function obj = MyClass(val)
         if nargin == 1
            obj.x = val;
         end
      end
   end
end
```

In this example, the `MyClass` class has a single property `x`, and a constructor method that receives an argument `val`. If the constructor is called with a single argument, it assigns the value to the `x` property of the new object.

To create a new object of the `MyClass` class, you can simply call the constructor:

```matlab
>> A = MyClass(10)
A = 
  MyClass with properties:
    x: 10
```

This will create a new object `A` of the `MyClass` class, with the `x` property initialized to the value `10`.

You can customize the constructor method to perform any initialization tasks you need, such as allocating memory, initializing other properties, or checking input arguments. For example, here is a modified version of the `MyClass` constructor that initiates both `x` and `y` properties:

```matlab
classdef MyClass
   properties
      x
      y
   end
   methods
      function obj = MyClass(val1,val2)
         if nargin == 2
            obj.x = val1;
            obj.y = val2;
         end
      end
   end
end
```

You can create a new object of the `MyClass` class with two arguments:

```matlab
>> B = MyClass(3,5)
B = 
  MyClass with properties:
    x: 3
    y: 5
```

This will create a new object `B` of the `MyClass` class, with the `x` and `y` properties initialized to the values `3` and `5`, respectively.