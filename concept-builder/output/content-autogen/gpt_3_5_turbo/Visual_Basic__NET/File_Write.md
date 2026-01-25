To write a file in Visual Basic .NET, you can use the StreamWriter class. The StreamWriter class allows you to write text to a file in a variety of encodings.

Here's an example code that writes a string to a file:

```
Dim fileName As String = "example.txt"
Dim content As String = "This is an example file."

Using writer As New StreamWriter(fileName)
    writer.Write(content)
End Using
```

In this example, we define a variable `fileName` to hold the name of the file we want to write to, and a variable `content` to hold the string we want to write. Then, we use the `Using` statement to create a new instance of the `StreamWriter` class and specify the file we want to write to. We then call the `Write` method on the `StreamWriter` instance, passing it the content we want to write.

Another example could be writing an array of strings to a file:

```
Dim fileName As String = "example.txt"
Dim content As String() = {"Line 1", "Line 2", "Line 3"}

Using writer As New StreamWriter(fileName)
    For Each line In content
        writer.WriteLine(line)
    Next
End Using
```

This example defines an array of strings to write to the file and then uses a loop to write each string to a new line in the file using the `WriteLine` method of the `StreamWriter` instance.

Note that in both examples, we used the `Using` statement to ensure that the `StreamWriter` instance is properly disposed of and the file is closed when we are finished with it. This is important to avoid file access errors and to free up system resources.