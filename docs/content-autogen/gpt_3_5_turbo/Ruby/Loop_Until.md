`until` is a looping control structure in Ruby that runs a block of code repeatedly until a specified condition is met. It is the opposite of the `while` loop, which runs a block of code repeatedly until a condition is no longer met. Here are some examples of how to use `until` in Ruby:

### Using a boolean condition:
```ruby
i = 0
until i == 5 do
  puts i
  i += 1
end
```
Output:
```
0
1
2
3
4
```
In this example, the `until` loop will run until the boolean expression `i == 5` evaluates to `true`. The loop will print values of `i` (from 0 to 4) and increment `i` until the condition is met.

### Using a negated boolean condition:
```ruby
count = 10
until !count do
  puts count
  count -= 1
end
```
Output:
```
10
9
8
7
6
5
4
3
2
1
0
```
In this example, the `count` variable is initialized to `10`. The `until` loop will run until the negation of `count` (which is `false` for any integer value other than `0`) evaluates to `true`. The loop will print values of `count` (from 10 to 0) and decrement `count` until the condition is met.

### Using an inline `until` statement:
```ruby
i = 0
puts i += 1 until i == 5
```
Output:
```
1
2
3
4
```
In this example, the `puts` statement is executed repeatedly until the condition `i == 5` evaluates to `true`. The loop increments `i` and prints its value until the condition is met.

### Using `begin` and `end` blocks:
```ruby
i = 0
begin
  puts i
  i += 1
end until i == 5
```
Output:
```
0
1
2
3
4
```
This example is similar to the first one, but shows how to use `begin` and `end` blocks to group the code statements that need to be repeated in the loop. The loop will run until the condition `i == 5` is met.