In Ruby, we can iterate over an array with index using several methods. Here are a few examples:

1. Using the `each_with_index` method:

```
fruits = ["apple", "banana", "orange", "pineapple"]

fruits.each_with_index do |fruit, index|
  puts "#{index}: #{fruit}"
end
```

The output would be:

```
0: apple
1: banana
2: orange
3: pineapple
```

2. Using the `map.with_index` method:

```
fruits = ["apple", "banana", "orange", "pineapple"]

result = fruits.map.with_index do |fruit, index|
  "#{index}: #{fruit}"
end

puts result
```

The output would be:

```
["0: apple", "1: banana", "2: orange", "3: pineapple"]
```

3. Using a `for` loop:

```
fruits = ["apple", "banana", "orange", "pineapple"]

for index in 0..(fruits.length - 1)
  puts "#{index}: #{fruits[index]}"
end
```

The output would be:

```
0: apple
1: banana
2: orange
3: pineapple
```

In all these examples, we use a block of code that takes two parameters - the current item in the array and its index - and performs an operation on them. We can then use the index as needed to perform any operations or calculations on the array elements.