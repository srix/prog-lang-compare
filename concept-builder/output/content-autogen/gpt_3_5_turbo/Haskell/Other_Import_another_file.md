In Haskell, we can import another source file into our current code with the `import` keyword. This allows us to use functions or types defined in that file in our current project. 

Let's say we have two files named "File1.hs" and "File2.hs" in the same directory. If we want to import functions/types defined in "File1.hs" into "File2.hs", we can use the following syntax:

```haskell
-- File2.hs
module File2 where

import File1 -- import File1.hs

-- rest of the code here
```

In this example, we first declare the module name (`File2`) using the `module` keyword. Then, we use the `import` keyword to import the functions/types defined in "File1.hs". We don't need to include the `.hs` extension in the import statement.

In "File1.hs", we could define some functions like:

```haskell
-- File1.hs
module File1 where

myFunction :: Int -> Int
myFunction x = x + 1
```

Now, in "File2.hs", we can use the `myFunction` function from "File1.hs":

```haskell
-- File2.hs
module File2 where

import File1 

main = do
  putStrLn "Enter a number:"
  num <- readLn :: IO Int
  let result = myFunction num
  putStrLn ("The result is: " ++ show result)
```

In this example, we import `File1` and use the `myFunction` function that was defined in that file. We can then use `myFunction` in our main program to transform user input.

Note that when we `import` a module, we can import all its definitions or selectively import just a few of them, like this:

```haskell
import File1 (myFunction, anotherFunction)
```

This would only import `myFunction` and `anotherFunction` from "File1.hs".