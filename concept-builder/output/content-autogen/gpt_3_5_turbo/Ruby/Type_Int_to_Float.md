Certainly! In Ruby, you can convert an integer to a float by simply calling the `to_f` method on the integer. Here's an example of how to do this:

```
# Convert an integer to a float
num = 5
float_num = num.to_f
puts float_num # Output: 5.0
```

In this example, we first create a variable `num` and assign it the integer value of `5`. We then call the `to_f` method on `num` and assign the result to a new variable called `float_num`. Finally, we use the `puts` method to output the value of `float_num` to the console.

You can also convert a string that represents an integer to a float in the same way:

```
# Convert a string integer to a float
num_str = "10"
float_num = num_str.to_f
puts float_num # Output: 10.0
```

In this example, we create a variable called `num_str` and assign it the string value of `"10"`, which represents the integer value of `10`. We then call the `to_f` method on `num_str`, which converts the string to a float, and assign the result to the variable `float_num`. Finally, we use the `puts` method to output the value of `float_num` to the console.