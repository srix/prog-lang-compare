In Ruby, you can count the number of elements in an array that match a condition using the `count` method or `inject` method. Here are examples of both:

Using `count` method:
```ruby
# Count the number of even numbers in an array
arr = [1, 2, 3, 4, 5, 6]
count = arr.count { |num| num.even? }
puts count # Output: 3 
```
In the example above, the `count` method is called on the `arr` array with a block that checks if a number is even. The resulting `count` variable is then printed, showing that there are three even numbers in the array.

Using `inject`:
```ruby
# Count the number of elements in an array that are greater than 5
arr = [1, 2, 3, 4, 5, 6]
count = arr.inject(0) { |sum, num| num > 5 ? sum + 1 : sum }
puts count # Output: 1
```
In the example above, the `inject` method is called on the `arr` array with an initial value of `0` and a block that checks if a number is greater than 5. If the number is greater than 5, it adds 1 to the sum. The resulting `count` variable is then printed, showing that there is only one number in the array greater than 5.