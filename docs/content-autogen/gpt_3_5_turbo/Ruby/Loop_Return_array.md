In Ruby, an array can be returned from a method using the `return` keyword or by utilizing the implicit return value.

1. Using the `return` keyword:
```
def return_array
  return [1, 2, 3, 4, 5]
end

puts return_array #=> [1, 2, 3, 4, 5]
```

2. Using the implicit return value:
```
def implicit_return_array
  [6, 7, 8, 9, 10]
end

puts implicit_return_array #=> [6, 7, 8, 9, 10]
```

Both methods will successfully return an array as their output. The first method explicitly uses the `return` keyword while the second method utilizes the implicit return value to return the array.