In Haskell, the `Data.Time` package provides functionality for working with dates. Here is an example of how to use the library to create and manipulate dates in Haskell:

```haskell
import Data.Time

-- create a date
today :: IO Day
today = utctDay <$> getCurrentTime

-- print today's date in a specific format
main :: IO ()
main = do
  t <- today
  putStrLn $ "Today is " ++ showGregorian t
```

In the example above, we import the `Data.Time` library and define a function `today` that returns the current date as a `Day` value. We then define a `main` function that uses `today` to print today's date in a specific format using the `showGregorian` function.

Here are some other examples of how to work with dates in Haskell:

```haskell
import Data.Time

-- create a date for a specific year, month, and day
someDate :: Day
someDate = fromGregorian 2021 4 28

-- add or subtract days from a date
nextWeek :: Day
nextWeek = addDays 7 someDate

-- calculate the difference between two dates in days
daysBetween :: Day -> Day -> Integer
daysBetween d1 d2 = diffDays d2 d1
```

In the example above, we create a `Day` value for a specific year, month, and day using the `fromGregorian` function. We also define a `nextWeek` value that adds 7 days to `someDate` using the `addDays` function. Finally, we define a function `daysBetween` that calculates the difference between two dates in days using the `diffDays` function.
