In MATLAB, private methods are functions that can only be accessed by other functions within the same class. They cannot be called directly from outside the class.

Here is an example of how to use private methods in MATLAB:

Let's consider a class named "Employee" that has two properties, "name" and "salary". We want to create a private method named "raiseSalary" that can only be called by other methods within the same class. This method will increase the employee's salary by a given percentage.

```matlab
classdef Employee
    properties
        name
        salary
    end
    
    methods
        function obj = Employee(n, s)
            obj.name = n;
            obj.salary = s;
        end
        
        function obj = giveRaise(obj, perc) % public method
            obj.salary = obj.raiseSalary(perc);
        end
    end
    
    methods (Access = private)
        function newSalary = raiseSalary(obj, perc) % private method
            newSalary = obj.salary * (1 + perc/100);
        end
    end
end
```

In this code, we have a private method named "raiseSalary" that takes in the employee object and a percentage increase as arguments. It calculates the new salary and returns it to the calling method.

The public method "giveRaise" takes in the percentage increase as an argument, calls the private method "raiseSalary" to calculate the new salary, and sets it to the object's salary property.

We can create an object of this class as follows:

```matlab
e = Employee('John Doe', 50000);
```

Then, we can call the public method "giveRaise" to increase the salary by 10%:

```matlab
e.giveRaise(10);
``` 

This will call the private method "raiseSalary" to calculate the new salary and set it to the object's salary property.

Note that if we try to call the private method "raiseSalary" directly from outside the class, we will get an error as follows:

```matlab
e.raiseSalary(10);
```

Error: 'raiseSalary' is not accessible from this context because it is private.