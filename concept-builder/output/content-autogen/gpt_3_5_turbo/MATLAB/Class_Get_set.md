In MATLAB, get and set are methods used to read or write the value of properties of an object. Here's an example of how to use get and set in a class:

```matlab
classdef Circle
   properties
      radius
   end
 
   methods
      % Constructor
      function obj = Circle(r)
         obj.radius = r;
      end
      
      % Get method
      function r = get.radius(obj)
         r = obj.radius;
      end
      
      % Set method
      function obj = set.radius(obj, newRadius)
         obj.radius = newRadius;
      end
   end
end
```

In this class, the property "radius" is defined. We have also created getter and setter methods for this property.

Here's how to use the get and set methods:

```matlab
% Create object of Circle class
c = Circle(5);

% Get the radius
r = get(c, 'radius');
disp(r); % Output: 5

% Set the radius
c = set(c, 'radius', 10);
r = get(c, 'radius');
disp(r); % Output: 10
```

In this example, we create an object of the Circle class with a radius of 5. We use the get method to retrieve the value of the radius property and display it using the disp function. We then use the set method to change the value of the radius property to 10. Finally, we use the get method again to retrieve the new value of the radius property and display it using the disp function.