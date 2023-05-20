In Haskell, to write a file, you can use the `writeFile` function from the `System.IO` module. The `writeFile` function takes two arguments: the file path and the content that you want to write into the file. Here's an example code snippet for writing a file:

```
import System.IO

main = do
  let filePath = "example.txt"
  let content = "This is an example text."
  writeFile filePath content
```

In the above code snippet, `writeFile` function writes the content to the file specified by the `filePath` variable. Once the code is executed, a file named `example.txt` will be created in the current working directory with content "This is an example text."

You can also provide a complete path for the file, for instance, `/Users/UserName/Documents/example.txt`. 

Note that if a file already exists with the same name/path, it will be overwritten by the content you write.
