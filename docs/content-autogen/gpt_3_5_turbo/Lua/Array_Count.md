In Lua, you can count the number of elements in an array that match a certain condition using a loop and an if statement. Here's an example:

```
-- create an array of numbers
myArray = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

-- define the condition we want to match
condition = 3

-- initialize a counter variable
count = 0

-- loop through the array and check each element
for i = 1, #myArray do
    if myArray[i] == condition then
        count = count + 1
    end
end

-- print the final count
print("The number of elements in the array that match the condition is: " .. count)
```

In this example, we create an array of numbers and set a condition to match against. We then loop through the array and check whether each element matches the condition using an if statement. If it does, we increment the counter variable by 1. Finally, we print out the final count.

If you want to count elements that match a more complex condition, you can modify the `if` statement to include logical operators (such as `and` or `or`) and comparison operators (such as `>`, `<`, `==`, etc.) as needed.