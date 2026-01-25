In Ruby, times is a method that can be called on an integer and takes a block of code as an argument. The block of code will be executed the number of times specified by the integer.

Here is the basic syntax for using times in Ruby:

```ruby
number_of_times.times do
   #code to execute
end
```

The `number_of_times` can be any integer value greater than zero. The code inside the `do` and `end` block will be executed for the number of times specified by the integer.

For example, if you want to print the numbers from 1 to 5 using `times`, you can use the following code:

```ruby
5.times do |i|
  puts i + 1
end
```

In the above example, `5` is the integer value on which we are calling the `times` method. The block of code inside the `do` and `end` is executed five times, each time with the value of `i` being incremented from 0 to 4. So, the output will be:

```
1
2
3
4
5
```

You can also use `times` without passing an argument to achieve a similar result like this:

```ruby
5.times { |i| puts i + 1 }
```

This will give you the same result as the previous example. However, using the `do` and `end` block is preferred for more complex code where readability is important.