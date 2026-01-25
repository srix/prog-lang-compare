In Haskell, you can get the working directory path using the `getCurrentDirectory` function from the `System.Directory` module.

Here is an example code snippet:

```haskell
import System.Directory

main :: IO ()
main = do
  currentDir <- getCurrentDirectory
  putStrLn $ "Current working directory: " ++ currentDir
```

Running this program will output the current working directory in the console.

You can also use the `getCurrentDirectory` function to get the working directory as a `FilePath`. Here is an alternative code snippet to the one above:

```haskell
import System.Directory

main :: IO ()
main = do
  currentDirPath <- getCurrentDirectory
  let filePath = currentDirPath ++ "/file.txt" -- You can create a path by appending to the current dir path
  putStrLn $ "File path: " ++ filePath
```

In this example, we use the `getCurrentDirectory` function to get the current directory path as a `String` and then create a file path by appending a file name to it.
