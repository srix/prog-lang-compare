In Lua, a constant list is a table that is used to hold a set number of items that cannot be changed once they are defined. These lists are useful in situations where you want to define a set of values that are read-only and cannot be modified during program execution.

Here's an example of how to define a constant list in Lua:

```lua
-- define a constant list of weekdays
weekdays = {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday"}

-- accessing the elements of the constant list
print(weekdays[1])    -- Output: Monday
print(weekdays[3])    -- Output: Wednesday
```

In the above example, we've defined a constant list of weekdays using a table. We assigned the table to a variable named `weekdays`. Since `weekdays` is a constant list, we cannot change its contents once defined.

We can access the individual elements of the constant list using the index operator `[]`. For example, `weekdays[1]` returns the first element of the constant list, which is `"Monday"`.

Here's another example that shows how to iterate over a constant list in Lua:

```lua
-- define a constant list of numbers
numbers = {10, 20, 30, 40, 50}

-- print out all the elements of the constant list
for i, num in ipairs(numbers) do
    print(i, num)
end
```

In this example, we've defined a constant list of numbers using a table. We then looped over each element of the list using the `ipairs` function, which returns the index and value of each element. We printed the index and value to the console using the `print` function.