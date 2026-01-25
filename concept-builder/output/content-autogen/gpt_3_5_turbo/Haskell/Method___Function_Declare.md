In Haskell, functions are declared using the "function name" followed by the "arguments". The syntax is fairly simple, and a function can be declared by writing:

```haskell
functionName :: argumentType1 -> argumentType2 -> ... -> returnType
functionName arg1 arg2 ... = expression
```

Here, `functionName` is the name of the function, `argumentType1`, `argumentType2`, etc. are the types of the arguments, and `returnType` is the type of the result that the function will return after being executed. `arg1`, `arg2`, etc are the actual arguments that will be passed to the function while calling.

Let's take an example to better understand it:

```haskell
-- Function to add two integers
add :: Integer -> Integer -> Integer
add x y = x+y

-- Function to check if a given string is palindrome or not
isPalindrome :: String -> Bool
isPalindrome str = str == reverse str
```

In the above example, the `add` function takes two integer arguments and return their sum, while `isPalindrome` takes a string argument and returns a boolean indicating whether the given string is a palindrome or not by comparing it to its reversed form.