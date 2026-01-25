Sure! In Lua, you can generate random numbers using the `math.random()` function. This function returns a random float between 0 and 1.

If you want to get a random integer between `1` and `100`, you can use the following code:

```lua
math.randomseed(os.time())
math.random(1, 100)
```

The `math.randomseed(os.time())` line is used to reset the random number generator's seed, so that you don't get the same sequence of random numbers every time you run your code. 

Here's an example that generates 5 random numbers between `1` and `10`:

```lua
math.randomseed(os.time())

for i=1,5 do
     print(math.random(1,10))
end
```

Output:
```
9
5
2
3
10
```

You could also generate a random number based on the current time. Here's an example that generates a random number between `0` and `9` using the current time as the seed:

```lua
math.randomseed(os.time())
print(math.random(10))
```

Output:
```
5
```

Hope this explanation helps!