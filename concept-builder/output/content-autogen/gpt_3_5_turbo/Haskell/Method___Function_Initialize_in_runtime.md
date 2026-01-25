In Haskell, you can define a function or method, and then initialize it at runtime using the `let` keyword. Here are some examples to illustrate the process:

Example 1: Defining and Initializing a Simple Function

Let's say we want to define a function that calculates the square of a given number. Here's how we can use `let` to define and initialize the function at runtime:

```
-- Define the function
square :: Int -> Int
square x = x * x

main :: IO ()
main = do
    -- Initialize the function with an argument
    let result = square 5
    putStrLn $ "The square of 5 is: " ++ show result
```

In this example, we first define the `square` function that takes an integer `x` as input and returns the square of `x`. Then, we use `let` in our `main` function to initialize the `result` variable by calling the `square` function with a value of 5. Finally, we print the result using `putStrLn`.

Example 2: Defining and Initializing a More Complex Function

Let's say we want to define a function that takes a list of integers, filters out the odd numbers, squares the even numbers, and returns the sum of all the squared even numbers in the list. Here's how we can use `let` to define and initialize the function at runtime:

```
-- Define the function
sumOfSquares :: [Int] -> Int
sumOfSquares xs =
  let evens = filter even xs -- filters out the odd numbers
      squares = map square evens -- squares the even numbers
  in sum squares -- returns the sum of squared even numbers

main :: IO ()
main = do
    -- Initialize the function with a list of integers
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        result = sumOfSquares numbers
    putStrLn $ "The sum of the squares of even numbers in the list is: " ++ show result
```

In this example, we define the `sumOfSquares` function that takes a list of integers `xs` as input. First, we use `filter` to remove all odd numbers from the input list, and then we use `map` to square all even numbers. Finally, we use `sum` to calculate the total sum of squared even numbers, and `let` to initialize and name the intermediate variables (`evens` and `squares`). We then initialize the function with the `numbers` list using `let`, and print the result using `putStrLn`.

I hope these examples demonstrate how you can use `let` to initialize functions at runtime in Haskell.