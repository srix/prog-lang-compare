In Ruby, a closure is a piece of code that enables a function to access variables outside its scope. It allows us to define a function with a persistent lexical scope that encapsulates the state.

Here's an example of using closure in Ruby:

```
def person(name)
  age = 20
  lambda do |increment|
    age += increment
    puts "#{name} is #{age} years old."
  end
end

teacher = person("Alice")
student = person("Bob")

teacher.call(5) # Outputs: Alice is 25 years old.
student.call(10) # Outputs: Bob is 30 years old.
```

In this example, we have defined a function `person` that takes a name parameter. Inside the `person` function, we have a lambda function that increments the age of the person. The `person` function returns the lambda function, which can then be called with an increment value to update the age.

We create two instances of the `person` function: `teacher` and `student`. Each instance has its own lexical scope that contains the `name` and `age` variables. We can then call the lambda function of each instance with a different increment value, resulting in different outputs.

Closure is a powerful feature in Ruby that allows us to encapsulate state and behavior within a function. We can create reusable functions that maintain their state across calls, making our code more modular and easier to manage.