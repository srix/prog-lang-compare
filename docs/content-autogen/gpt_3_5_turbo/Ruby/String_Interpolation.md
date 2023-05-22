Interpolation refers to embedding an expression into a string literal. In Ruby, interpolation is achieved by placing the expression inside the string inside curly braces (`#{ }`). The expression is evaluated and the result is converted to a string and inserted into the original string.

Here are some examples of string interpolation in Ruby:

1. Basic example:

```ruby
name = "John"
age = 30
puts "My name is #{name} and I am #{age} years old."
```

Output: `My name is John and I am 30 years old.`

2. Interpolating expressions:

```ruby
a = 10
b = 20
puts "The sum of #{a} and #{b} is #{a + b}."
```

Output: `The sum of 10 and 20 is 30.`

3. Interpolating method calls:

```ruby
today = Time.now.strftime("%Y-%m-%d")
puts "Today is #{today}."
```

Output (assuming today's date is 2021-09-01): `Today is 2021-09-01.`

4. Escaping characters:

```ruby
puts "She said, \"Hello!\""
```

Output: `She said, "Hello!"`

5. Interpolating a ternary operator:

```ruby
age = 17
puts "You are #{age >= 18 ? "old enough" : "too young"} to vote."
```

Output: `You are too young to vote.`

Overall, string interpolation is a convenient way to embed variables, expressions, and method calls into a string literal in Ruby.