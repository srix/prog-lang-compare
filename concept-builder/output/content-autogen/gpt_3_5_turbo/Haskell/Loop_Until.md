In Haskell, `until` is a higher-order function that takes two arguments: a predicate function and a transforming function. It repeatedly applies the transforming function to an initial value until the predicate is satisfied. Here is the syntax for `until`:

```
until :: (a -> Bool) -> (a -> a) -> a -> a
```

The first argument is the predicate function that takes a value of type `a` and returns a `Bool` value representing whether the predicate is satisfied or not. The second argument is the transforming function that takes a value of type `a` and returns a new value of type `a`. The third argument is the initial value to apply the transforming function to.

Here are a few examples of using `until`:

Example 1: Squaring a number until it exceeds 100

```haskell
-- Define the predicate function
exceeds100 :: Int -> Bool
exceeds100 x = x > 100

-- Define the transforming function
square :: Int -> Int
square x = x * x

-- Use until to repeatedly apply the transforming function to 2 until the predicate is satisfied
-- The output should be 256 because we square 2 four times to get 16, 256 is the first number greater than 100
main :: IO ()
main = print $ until exceeds100 square 2
```

Example 2: Reversing a list until it is equal to its reverse

```haskell
-- Define the predicate function
isPalindrome :: Eq a => [a] -> Bool
isPalindrome lst = lst == reverse lst

-- Define the transforming function
reverseList :: [a] -> [a]
reverseList lst = reverse lst

-- Use until to repeatedly apply the transforming function to a list until the predicate is satisfied
-- The output should be [1,2,3,2,1]
main :: IO ()
main = print $ until isPalindrome reverseList [1,2,3]
```

Example 3: Finding the square root of a number with Newton's method

```haskell
-- Define the precision value
epsilon :: Double
epsilon = 0.00001

-- Define the predicate function
closeEnough :: Double -> Double -> Bool
closeEnough x y = abs(x - y) < epsilon

-- Define the transforming function
improveGuess :: Double -> Double -> Double
improveGuess n guess = (guess + n / guess) / 2

-- Define the function that uses until to find the square root of a number using Newton's method
-- The output should be about 6.324555320336759
sqrt' :: Double -> Double
sqrt' n = until (closeEnough n) (improveGuess n) 1.0

-- Test the function with 40 and 10000
main :: IO ()
main = do
    putStrLn $ "Square root of 40: " ++ show (sqrt' 40)
    putStrLn $ "Square root of 10000: " ++ show (sqrt' 10000)
``` 

In summary, `until` is a powerful function in Haskell that allows you to repeatedly transform a value until a given predicate is satisfied.