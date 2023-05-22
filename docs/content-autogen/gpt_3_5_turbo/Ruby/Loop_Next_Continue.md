In Ruby, `next` is used inside loops such as `while`, `for`, and `until` to skip an iteration and move on to the next one. Similarly, `continue` is used inside loops like `for`, `while`, and `until` to skip the current iteration and move on to the next one. Here are some examples:

Using `next`:

```
# Loop through an array and print only even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.each do |number|
  next if number.odd?
  puts number
end

# Output: 
# 2
# 4
# 6
# 8
# 10
```

In the above example, `next` is used to skip the iteration if the number is odd.

Using `continue`:

```
# Loop through an array and print only numbers greater than 5
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers do
  next unless number > 5
  puts number
end

# Output:
# 6
# 7
# 8
# 9
# 10
```
In the above example, `continue` is used to skip the iteration if the number is less than or equal to 5.