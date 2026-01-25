In Haskell, the if/else expression works similarly to other programming languages. The syntax of the if/else statement is:

```
if condition then expression1 else expression2
```

Here, `condition` is the condition that is evaluated, and `expression1` and `expression2` are the results that are returned, depending on whether the condition is true or false.

Example:

Let's say we want to write a program that takes a number as input and checks whether it is even or odd. We can do this using the if/else statement as follows:

```
evenOdd :: Int -> String
evenOdd num = if (mod num 2 == 0) then "even" else "odd"
```

Here, `evenOdd` is a function that takes an integer value as input and returns either "even" or "odd" based on whether the input number is even or odd. 

If the condition `(mod num 2 == 0)` is true, then the function returns `"even"`, and if the condition is false, the function returns `"odd"`.

We can call this function as follows:

```
evenOdd 2 -- returns "even"
evenOdd 3 -- returns "odd"
```

This is just one example of using the if/else statement in Haskell. There are many other ways to use it depending on the specific requirement of your program.