In Haskell, you can get the current directory path using the `getCurrentDirectory` function provided by the `System.Directory` module.

Here's an example code snippet that shows how to use `getCurrentDirectory`:

```haskell
import System.Directory (getCurrentDirectory)

main :: IO ()
main = do
    dirPath <- getCurrentDirectory
    putStrLn $ "Current directory path: " ++ dirPath
```

In this code snippet, the `getCurrentDirectory` function is called inside the `do` block to get the current directory path. The resulting path is stored in the `dirPath` variable, which can then be printed to the console using the `putStrLn` function.

You can also use the `getCurrentDirectory` function in combination with other functions from the `System.Directory` module to manipulate files and directories in the current directory. Here's an example code snippet that shows how to list all files and directories in the current directory:

```haskell
import System.Directory (getCurrentDirectory, listDirectory)

main :: IO ()
main = do
    dirPath <- getCurrentDirectory
    contents <- listDirectory dirPath
    putStrLn "Current directory contents:"
    mapM_ putStrLn contents
```

In this code snippet, the `listDirectory` function is used to get a list of all files and directories in the current directory. The resulting list is stored in the `contents` variable, which is then printed to the console using the `mapM_ putStrLn` function.
