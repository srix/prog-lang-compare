In Ruby, you can get the first and last elements of an array using the methods `first` and `last`, respectively.

Here is an example of how to get the first and last elements of an array:

```
# Defining an array
my_array = [1, 2, 3, 4, 5]

# Get first and last elements of the array
first_element = my_array.first
last_element = my_array.last

puts "The first element in the array is #{first_element}."
puts "The last element in the array is #{last_element}."
```

This would output:

```
The first element in the array is 1.
The last element in the array is 5.
```

You can also use an index to get the first and last element of an array. The first element has the index 0 while the last one has the index `array.length - 1`. Here is an example:

```
# Defining an array
my_array = [1, 2, 3, 4, 5]

# Get first and last elements of the array using the index
first_element = my_array[0]
last_element = my_array[my_array.length - 1]

puts "The first element in the array is #{first_element}."
puts "The last element in the array is #{last_element}."
```

This would output the same result as the previous example.