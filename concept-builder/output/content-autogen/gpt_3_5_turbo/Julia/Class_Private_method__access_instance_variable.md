In Julia, instance variables can be accessed in private methods using the `self` keyword. The `self` keyword refers to the object or instance that the method is being called on.

Here's an example:

```
struct MyClass
    private_field::Int
    
    function MyClass(private_field::Int)
        new(private_field)
    end
    
    private function my_private_method()
        println("Accessing private field: ", self.private_field)
    end
end

obj = MyClass(42)
obj.my_private_method() # prints "Accessing private field: 42"
```

In the example above, the `private_field` variable is an instance variable that is declared as private. The constructor takes an argument that initializes this variable.

The method `my_private_method` is marked as private and can only be called by methods or functions defined within the same module. Inside the method, the `self` keyword can be used to access the private instance variable `private_field`.

We create an object of `MyClass` and call the private method `my_private_method` on it. The output will be "Accessing private field: 42", confirming that the private method is able to access the private instance variable.