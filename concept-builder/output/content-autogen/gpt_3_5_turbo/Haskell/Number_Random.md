In Haskell, to generate random numbers, you need to make use of the `random` module that provides a typeclass `RandomGen`. This typeclass provides a `random` function that generates a random number and returns a new `RandomGen` generator, which can be used to generate the next random number.

Here's an example of how to generate a random number using `System.Random` module:

```haskell
import System.Random

main :: IO ()
main = do
  gen <- newStdGen                    -- create a new RNG seed
  let randomNum = fst $ random gen :: Int  -- generate a random number
  print randomNum                    -- display the generated number
```

In this example, we use the `newStdGen` function to create a new random number generator. Next, we generate a random number using the `random` function, which takes a random number generator as input, and produces a random number of the specified type. In this case, we use `Int` as the type of random number.

Another example using the `randomR` function to generate a random number within a given range:

```haskell
import System.Random

main :: IO ()
main = do
  gen <- newStdGen                      -- create a new RNG seed
  let (randInt, _) = randomR (1, 10) gen :: (Int, StdGen) -- generate a random number between 1 and 10
  print randInt                          -- display the generated number
```

In this example, we use the `randomR` function to generate a random number within a specific range. The function takes two arguments, a tuple containing the lower and upper bounds of the range, and the random number generator. And `fst` function selects the first value (i.e., the generated random number) from the tuple returned by `randomR`.