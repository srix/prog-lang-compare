In Haskell, the 'for' loop is not a built-in feature, however, we can simulate a 'for' loop using recursion and looping constructs like 'map' and 'foldl'.

Here's an example:

Suppose we want to calculate the sum of elements in a list, using a 'for loop' structure:

```haskell
forLoop :: [Int] -> Int -> Int -> Int
forLoop [] _ result = result -- base case, loop till the list is empty
forLoop (x : xs) counter result = if counter < 5 
                                      then forLoop xs (counter + 1) (result + x) 
                                      else result
-- if counter < 5, repeat the loop, otherwise end loop

main = do
  let list = [1,2,3,4,5,6,7,8,9,10]
  print $ forLoop list 0 0
```

Here, we define a 'forLoop' function that takes a list, a counter, and a result parameter as input. We call the function recursively until counter reaches 5. For every iteration, we add the current element (x) to the result. Once the counter reaches 5, we return the result.

While this implementation simulates a 'for loop', it is not as efficient as writing the same loop without recursion in an imperative language like C++ or Java. In Haskell, it is recommended to use functions like 'map' or 'foldl' instead of implementing recursive 'for loops'.