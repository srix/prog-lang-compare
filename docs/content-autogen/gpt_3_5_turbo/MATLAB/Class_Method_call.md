In MATLAB, to call a method of a class, you need to create an instance of the class using the constructor method, and then call the desired method using the dot notation.

Here's an example of a class called `Circle` with a method `getArea()` that calculates the area of a circle:

```matlab
classdef Circle
   properties
      radius
   end
   methods
      function obj = Circle(r)
         obj.radius = r;
      end
      
      function area = getArea(obj)
         area = pi * obj.radius^2;
      end
   end
end
```
To call the `getArea()` method of this class, you need to create an object of the Circle class by calling its constructor method, passing the radius of the circle as an argument. You can then call the `getArea()` method on the object using dot notation, and assign the result to a variable or display it.

```matlab
>> circle = Circle(2);   % create a Circle object with radius 2
>> area = circle.getArea()  % call the getArea() method and assign the result to the area variable
area =
   12.5664
```

Alternatively, you can call the method directly, without assigning the object to a variable, like this:

```matlab
>> area = Circle(2).getArea()  % create the object and call the method in one line
area =
   12.5664
``` 

I hope this helps!