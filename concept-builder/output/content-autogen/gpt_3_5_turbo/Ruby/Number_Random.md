To generate random numbers in Ruby, you can use the built-in `rand` method. Here are some examples:

1. Generating a random float between 0 and 1:

```ruby
random_number = rand()
puts random_number
```

Output:

```
0.9313789293323958
```

2. Generating a random integer between 0 and n-1:

```ruby
random_number = rand(10) # generates a random number between 0 and 9
puts random_number
```

Output:

```
7
```

3. Generating a random integer between a and b:

```ruby
random_number = rand(1..10) # generates a random number between 1 and 10
puts random_number
```

Output:

```
4
```

Note that `rand(n)` returns a number that's less than `n`, and `rand(a..b)` returns a number that's between `a` and `b`, inclusive.