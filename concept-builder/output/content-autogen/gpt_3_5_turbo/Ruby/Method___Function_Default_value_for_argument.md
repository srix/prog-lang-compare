In Ruby, default values can be assigned to optional parameters of a method or function. This allows the programmer to provide a standard or default value for the argument in case the argument is not passed while calling the method or function.

Here's the syntax to add default values in a Ruby method:

```
def method_name(param1, param2=default_val)
  # Method body
end
```

In this example, `param1` is a mandatory parameter and `param2` is an optional parameter with a default value of `default_val`. If the value of `param2` is not passed while calling the method, it will automatically take the value of `default_val`.

Here's an example:

```
def welcome(name, message = "Welcome to our website!")
  puts "#{name}, #{message}"
end

# Call the method without passing second argument
welcome("John")
# Output: John, Welcome to our website!

# Call the method with passing second argument
welcome("Joey", "Thanks for visiting our website!")
# Output: Joey, Thanks for visiting our website!
```

In this example, `welcome` is a method that takes two arguments, `name` (mandatory) and `message` (optional) with a default value of `"Welcome to our website!"`. If the value of `message` is not passed while calling the method, it will automatically take the default value.