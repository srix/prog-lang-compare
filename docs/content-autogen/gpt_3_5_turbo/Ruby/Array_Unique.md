In Ruby, the `uniq` method can be used to get the unique elements of an array. Here are some examples:

Example 1: Get unique elements of an array of integers

```
arr = [1, 2, 3, 2, 4, 3]
unique_arr = arr.uniq
puts unique_arr.inspect   # Prints [1, 2, 3, 4]
```

Example 2: Get unique elements of an array of strings

```
arr = ["apple", "banana", "apple", "orange", "pear"]
unique_arr = arr.uniq
puts unique_arr.inspect   # Prints ["apple", "banana", "orange", "pear"]
```

Example 3: Get unique elements of an array of hashes by comparing a specific key

```
arr = [
  {name: "John", age: 30},
  {name: "Jane", age: 25},
  {name: "John", age: 35},
  {name: "Mike", age: 30}
]

unique_arr = arr.uniq { |h| h[:name] }
puts unique_arr.inspect   # Prints [{:name=>"John", :age=>30}, {:name=>"Jane", :age=>25}, {:name=>"Mike", :age=>30}]
```

In the last example, the `uniq` method is followed by a block that specifies that uniqueness should be determined based on the value of the `:name` key in each hash.