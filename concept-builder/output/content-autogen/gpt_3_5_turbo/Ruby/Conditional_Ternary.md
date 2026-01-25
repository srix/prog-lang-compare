Ternary operator is a shorthand way of writing an if-else statement in Ruby by using a single line of code. 

The syntax for the ternary operator in Ruby is:

```
(conditional statement) ? (execute this code) : (execute this code instead)
```

Here's an example of using the ternary operator to check if a number is even or odd:

```
number = 5
result = number % 2 == 0 ? "even" : "odd"
puts result # Output: "odd"
```

In the above example, the first part `(number % 2 == 0)` is the conditional statement, which checks if the number is divisible by 2 or not. If the number is divisible by 2, it returns true and the code after the `?` is executed, which is the string `"even"`. If the number is not divisible by 2, it returns false and the code after `:` is executed, which is the string `"odd"`.

Here's another example that demonstrates how to use the ternary operator to assign a value to a variable based on a condition:

```
num = 10
message = if num > 5
            "Number is greater than 5"
          else
            "Number is less than or equal to 5"
          end
puts message # Output: "Number is greater than 5"
```

The above code uses the ternary operator to make the code more concise. The conditional statement `(num > 5)` checks if the number is greater than 5 or not. If it's true, then `message` is assigned the string `"Number is greater than 5"` and if it's false, then `message` is assigned the string `"Number is less than or equal to 5"`. 

Note that the ternary operator is a good choice for short conditional statements. However, if the if-else statements get long and complicated, it's better to use the full if-else statement for better readability.