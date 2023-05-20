In Haskell, we can read files using the `readFile` function from the `System.IO` module. Here is an example of how to use this function:

```haskell
import System.IO

main = do
  fileHandle <- readFile "example.txt"
  putStrLn fileHandle
```

In this example, we have imported the `System.IO` module and defined a `main` function. Within the `main` function, we call the `readFile` function and pass it the name of the file we want to read ("example.txt"). The `readFile` function returns a string containing the contents of the file, which we store in the `fileHandle` variable.

Finally, we use the `putStrLn` function to print the contents of the file to the console.

Here is another example that shows how to read a file line by line:

```haskell
import System.IO

main = do
  fileHandle <- openFile "example.txt" ReadMode
  contents <- hGetContents fileHandle
  let linesOfFile = lines contents
  mapM_ putStrLn linesOfFile
  hClose fileHandle
```

In this example, we use the `openFile` function to open the file in read mode, which returns a file handle. We then call the `hGetContents` function, passing it the file handle, to retrieve the contents of the file as a string.

We can use the `lines` function to split the contents into a list of strings, with each string representing a line in the file. We then use the `mapM_` function to print each line to the console, followed by the `hClose` function to close the file handle.

These are just a couple of examples of how to read a file in Haskell using the `System.IO` module.
