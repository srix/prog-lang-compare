In Lua, you can create an array with different types by simply storing different types of values in the same array. Here's an example:

```
-- creating an array with different types

my_array = {10, "hello", true, 3.14}

-- accessing the array elements

print(my_array[1]) -- output: 10
print(my_array[2]) -- output: hello
print(my_array[3]) -- output: true
print(my_array[4]) -- output: 3.14
```

Here, we have created an array called `my_array` that contains four elements of different types: an integer (`10`), a string (`"hello"`), a boolean (`true`), and a floating point number (`3.14`). We can access individual elements in the array using a numerical index. 

Note that Lua arrays are not strictly typed, meaning that you can change the type of a value stored at a particular index if you want to. However, as a good programming practice, it is usually better to keep the types of the values in an array consistent.