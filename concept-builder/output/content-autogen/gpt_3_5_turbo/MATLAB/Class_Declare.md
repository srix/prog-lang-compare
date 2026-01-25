In MATLAB, to declare a class, you can use the `classdef` keyword followed by the class name. Here's a simple example:

```
classdef MyClass
end
```

This creates an empty class called `MyClass`. You can add properties to this class using the `properties` keyword and methods using the `methods` keyword. Here's an example that includes properties and methods:

```
classdef MyClass
    properties
        Name
        Age
    end
    
    methods
        function obj = MyClass(name, age)
            obj.Name = name;
            obj.Age = age;
        end
        
        function sayHello(obj)
            fprintf('Hello, my name is %s and I am %d years old.\n', obj.Name, obj.Age);
        end
    end
end
```

In this example, we define a class called `MyClass` with two properties (`Name` and `Age`) and two methods (`MyClass` constructor and `sayHello`). The constructor takes two arguments (`name` and `age`) and assigns them to the respective properties. The `sayHello` method prints out a message using the properties.

To create an instance of this class, you simply call the constructor with the appropriate arguments, like this:

```
myObj = MyClass('John', 30);
```

This creates an object called `myObj` with the `Name` property set to `'John'` and the `Age` property set to `30`. You can then call the `sayHello` method on this object:

```
myObj.sayHello();
```

This will print out the message "Hello, my name is John and I am 30 years old."