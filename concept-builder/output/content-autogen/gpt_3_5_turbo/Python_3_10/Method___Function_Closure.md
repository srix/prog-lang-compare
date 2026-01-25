Closure is a powerful feature in Python, which allows a nested function to access and modify variables that exist in the local scope of the outer function. Here's an example:

```python
def outer_function(x):
    def inner_function(y):
        return x + y
    return inner_function

closure_func = outer_function(10)
print(closure_func(5))  # Output: 15
```

In the code above, we create an outer function `outer_function` that takes an argument `x`. The inner function `inner_function` is defined within `outer_function` and takes an argument `y`. The inner function simply returns the sum of `x` and `y`.

When we call `outer_function` with an argument of 10, it returns `inner_function`. We assign this returned function to a variable `closure_func`. We can then call `closure_func` with an argument of 5, which returns the sum of 10 and 5, i.e., 15.

Notice that `inner_function` has access to the variable `x` in the outer scope even though it is defined inside the `outer_function`. This is because closures can retain references to variables that they need from the outer scope. In this way, closures can encapsulate the state of a function between calls.

Here's another example that demonstrates the usefulness of closures:

```python
def counter(initial_value):
    count = initial_value

    def increment(value=1):
        nonlocal count
        count += value
        return count

    return increment

counter1 = counter(0)
counter2 = counter(10)

print(counter1())   # Output: 1
print(counter1())   # Output: 2
print(counter2())   # Output: 11
print(counter1())   # Output: 3
print(counter2())   # Output: 12
```

In this example, we define a function `counter` that takes an initial value as an argument and returns a function `increment`. The `increment` function has access to the `count` variable in the outer `counter` scope through a closure.

Each time we call the `increment` function returned by `counter`, it increments the `count` variable in its enclosing scope and returns its new value. We create two separate counters that work independently of each other. 

Overall, closures in Python are a powerful tool for creating functions with state that remain accessible even after the function has exited. They allow us to write more flexible and maintainable code by encapsulating behavior and data together.