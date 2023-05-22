Inheritance is the process of deriving a new class from an existing class. The new class inherits all the properties and methods of the existing class, and can also add its own properties and methods.

To use inheritance in MATLAB, you can do the following:

1. Define a superclass: This is the class from which you want to inherit properties and methods. For example, let's define a simple class called `Rectangle` that has two properties, `length` and `width`, and a method called `area` that calculates the area of the rectangle.

```matlab
classdef Rectangle
    properties
        length
        width
    end
    
    methods
        function obj = Rectangle(l, w)
            obj.length = l;
            obj.width = w;
        end
        
        function a = area(obj)
            a = obj.length * obj.width;
        end
    end
end
```

2. Define a subclass: This is the new class that will inherit from the superclass. For example, let's define a class called `Square` that inherits from `Rectangle` and has an additional property called `side`.

```matlab
classdef Square < Rectangle
    properties
        side
    end
    
    methods
        function obj = Square(s)
            obj = obj@Rectangle(s, s);
            obj.side = s;
        end
    end
end
```

Notice that in the definition of the `Square` class, we use the `<` symbol followed by the name of the superclass (`Rectangle`) to indicate that `Square` inherits from `Rectangle`.

Also notice that in the constructor of `Square`, we call the constructor of `Rectangle` using the `@` symbol and pass in the side length twice (since a square has equal side lengths).

Now, we can create objects of both classes and call their methods:

```matlab
rect = Rectangle(3, 4);
area = rect.area(); % Returns 12

sq = Square(5);
area = sq.area(); % Returns 25
```

By using inheritance, we were able to reuse the `area` method from the `Rectangle` class in the `Square` class without having to redefine it. We also added an additional property to the `Square` class (`side`) that was not present in the `Rectangle` class.