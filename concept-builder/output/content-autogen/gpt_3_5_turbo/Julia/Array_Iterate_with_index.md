In Julia, we can iterate over an array with index in several ways. Here are some examples:

1. Using a for loop with the `enumerate()` function:
```
array = ["apple", "banana", "cherry"]

for (index, value) in enumerate(array)
    println("$index: $value")
end
```
Output:
```
1: apple
2: banana
3: cherry
```

2. Using a for loop with `1:length()`:
```
array = ["apple", "banana", "cherry"]

for i in 1:length(array)
    println("$i: $(array[i])")
end
```
Output:
```
1: apple
2: banana
3: cherry
```

3. Using a while loop with a counter variable:
```
array = ["apple", "banana", "cherry"]
i = 1

while i <= length(array)
    println("$i: $(array[i])")
    i += 1
end
```
Output:
```
1: apple
2: banana
3: cherry
```

In all three examples, we iterate over the `array` variable with an index. The first example uses `enumerate()` to get both the index and the value of each element in the array. The second example uses `1:length()` to iterate over the indices of the array, and then accesses the corresponding element using the index. The third example uses a while loop with a counter variable that is incremented with each iteration.