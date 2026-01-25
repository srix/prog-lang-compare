In Haskell, you can use the `times` function to repeat a specific action a certain number of times. The `times` function is defined in the Data.List module.

The syntax of the `times` function is as follows:

`times :: Int -> a -> [a]`

where `Int` is the number of times you want the value to be repeated and `a` is the value that you want to be repeated.

Here's an example of using the `times` function to repeat a character `a` three times:

```
import Data.List

myList = times 3 'a'
```

The output of the above code will be:

```
"aaa"
```

Similarly, you can use the `times` function to repeat a list of values a certain number of times. Here's an example:

```
import Data.List

myList = times 2 [1, 2, 3]
```

The output of the above code will be:

```
[[1,2,3],[1,2,3]]
```

Note that the `times` function returns a list of the repeated values.