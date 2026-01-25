In Ruby, an array is a collection of elements identified by an index. We can iterate over an array using different iterating methods provided by Ruby. Here are examples of some of the ways to iterate over an array in Ruby:

1. Using for loop:

```ruby
numbers = [1, 2, 3, 4, 5]

for number in numbers
  puts number
end
```

Output:
```
1
2
3
4
5
```

2. Using each method:

```ruby
numbers = [1, 2, 3, 4, 5]

numbers.each do |number|
  puts number
end
```

Output:
```
1
2
3
4
5
```

3. Using map method:

```ruby
numbers = [1, 2, 3, 4, 5]

squares = numbers.map do |number|
  number * number
end

puts squares
```

Output:
```
[1, 4, 9, 16, 25]
```

4. Using while loop:

```ruby
numbers = [1, 2, 3, 4, 5]

i = 0
while i < numbers.length do
  puts numbers[i]
  i += 1
end
```

Output:
```
1
2
3
4
5
```

5. Using until loop:

```ruby
numbers = [1, 2, 3, 4, 5]

i = 0
until i == numbers.length do
  puts numbers[i]
  i += 1
end
```

Output:
```
1
2
3
4
5
```