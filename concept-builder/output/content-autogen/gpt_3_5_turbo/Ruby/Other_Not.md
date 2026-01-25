In Ruby, `not` is a logical operator that returns the opposite of a given Boolean expression.

Here's an example:

```ruby
x = 10
y = 20

if not(x > y)
  puts "x is not greater than y"
end
```

In this example, `not(x > y)` will return `true` since `x` is not greater than `y`. Therefore, the code inside the `if` statement will be executed and "x is not greater than y" will be printed to the console.

Alternatively, you can use `!` as a shorthand for `not`, like so:

```ruby
if !(x > y)
  puts "x is not greater than y"
end
```

This achieves the same result as the first example.