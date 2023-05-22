In Lua, you can check if an array includes an element using the `table` library's `find` function. Here's an example:

```
array = {"apple", "banana", "cherry"}

-- Check if array includes "banana"
if table.find(array, "banana") then
  print("Array includes banana")
else
  print("Array doesn't include banana")
end

-- Check if array includes "orange"
if table.find(array, "orange") then
  print("Array includes orange")
else
  print("Array doesn't include orange")
end
```
In this example, we create an array of fruits (`array`) and then check whether it includes "banana" and "orange". The `table.find` function returns the index of the first occurrence of the element in the array or `nil` if the element is not found. In the first `if` statement, `table.find(array, "banana")` returns the index of "banana", which is a truthy value, so the message "Array includes banana" is printed. In the second `if` statement, `table.find(array, "orange")` returns `nil`, which is a falsy value, so the message "Array doesn't include orange" is printed.