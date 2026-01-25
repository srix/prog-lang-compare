In Ruby, you can find the first element of an array using the `first` method. Here's an example:

```ruby
fruits = ["apple", "banana", "orange"]
first_fruit = fruits.first

puts first_fruit # output: "apple"
```

In this example, we define an array of fruits and store it in the variable `fruits`. We then use the `first` method to retrieve the first element of the array and store it in the variable `first_fruit`. Finally, we output the value of `first_fruit`, which is "apple".

Alternatively, you can also use the index position of the first element (which is 0) to get the value. Here's another example:

```ruby
fruits = ["apple", "banana", "orange"]
first_fruit = fruits[0]

puts first_fruit # output: "apple"
```

In this example, we again define an array of fruits and store it in the variable `fruits`. However, this time we use the index position `[0]` to retrieve the first element of the array and store it in the variable `first_fruit`. Finally, we output the value of `first_fruit`, which is again "apple".