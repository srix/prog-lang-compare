`for` is a keyword in Julia used to iterate over a collection of elements. The most commonly used syntax for using `for` in Julia is:

```
for variable in collection
    # iterate over each item in the collection
    # perform some operations
end
```

Here, `variable` is a variable name that we choose to represent each item in the `collection`. The `collection` can be any iterable data structure like an array or a range.

Let's look at some examples:

Example 1: Iterating over an array

```julia
fruits = ["apple", "banana", "cherry", "orange"]
for fruit in fruits
    println(fruit)
end
```

Output:
```
apple
banana
cherry
orange
```

Example 2: Iterating over a range

```julia
for i in 1:5
    println(i)
end
```

Output:
```
1
2
3
4
5
```

Example 3: Nested `for` loops

```julia
for i in 1:3
  for j in 1:2
    println((i, j))
  end
end
```

Output:
```
(1, 1)
(1, 2)
(2, 1)
(2, 2)
(3, 1)
(3, 2)
``` 

Example 4: Using `continue` to skip some items

```julia
fruits = ["apple", "banana", "cherry", "orange"]
for fruit in fruits
    if fruit == "cherry"
        continue
    end
    println(fruit)
end
```

Output:
```
apple
banana
orange
```

Example 5: Using `break` to exit the loop

```julia
for i in 1:5
    if i == 3
        break
    end
    println(i)
end
```

Output:
```
1
2
``` 

These are some examples of how you can use `for` in Julia.