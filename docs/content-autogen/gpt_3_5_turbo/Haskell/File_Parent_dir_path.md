To get the parent directory path in Haskell, we need to use the `System.Directory` module which provides functions for interacting with the file system.

The `System.Directory.getParentDirectory` function can be used to retrieve the parent directory of a given file or directory path.

Example:

```haskell
import System.Directory (getParentDirectory)

main = do
  let path = "/home/user/documents/example.txt"
  let parentPath = getParentDirectory path
  putStrLn parentPath
```

In the above example, we first import the `System.Directory` module. We then define a file path `path` and use `getParentDirectory` to retrieve its parent directory path, which is then stored in `parentPath`.

We then print the value of `parentPath` to the console using the `putStrLn` function.

Output:
```
/home/user/documents
```
