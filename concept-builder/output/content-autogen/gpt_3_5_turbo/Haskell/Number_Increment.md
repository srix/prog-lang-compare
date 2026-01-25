In Haskell, there are several ways to increment a number:

1. Using the (+) operator:
The (+) operator is used to add two numbers together. To increment a number, you simply add 1 to it using the (+) operator. Here's an example:

```haskell
x = 5
y = x + 1
-- y now contains the value 6
```

2. Using the succ function:
The succ function is used to return the successor of a number. In other words, it returns the next number after the given number. Here's an example:

```haskell
x = 5
y = succ x
-- y now contains the value 6
```

3. Using pattern matching:
You can also use pattern matching to increment a number. Here's an example:

```haskell
increment :: Int -> Int
increment 0 = 1
increment n = n + 1
-- The above function returns the next number after the input number
```

Using any of these methods, you can easily increment a number in Haskell.