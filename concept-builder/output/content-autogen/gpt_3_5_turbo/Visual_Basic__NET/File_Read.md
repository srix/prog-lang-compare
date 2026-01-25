In Visual Basic .NET, you can read the content of a file by using the StreamReader class. Here are the steps to read a file in Visual Basic .NET:

1. Open the file: First, you need to open the file for reading. You can use the OpenFileDialog control to let the user select the file or you can specify the file path and name directly in your code.

Example:
```
Dim openFileDialog1 As New OpenFileDialog()

If openFileDialog1.ShowDialog() = System.Windows.Forms.DialogResult.OK Then
   Dim fileStream As System.IO.Stream = openFileDialog1.OpenFile()
   Dim reader As New StreamReader(fileStream)
End If
```

2. Read the content of the file: Once the file is opened, you can read its content using the StreamReader object. You can read the content of the file line by line using the ReadLine() method or all at once using ReadToEnd() method.

Example:
```
Dim openedFile As String = openFileDialog1.FileName
Dim reader As New StreamReader(openedFile)
Dim fileContent As String = reader.ReadToEnd()

Console.WriteLine(fileContent)
```

3. Close the file: Once you are done reading the content of the file, you should close the StreamReader object.

Example:
```
reader.Close()
```

Note: You should always handle exception when working with files. Here is the complete code to read the content of a file in Visual Basic .NET:

```
'Open file dialog to select file
Dim openFileDialog1 As New OpenFileDialog()

If openFileDialog1.ShowDialog() = System.Windows.Forms.DialogResult.OK Then
   'Open file
   Dim openedFile As String = openFileDialog1.FileName
   Dim reader As New StreamReader(openedFile)

   'Read file content
   Try
      Dim fileContent As String = reader.ReadToEnd()
      Console.WriteLine(fileContent)
   Catch ex As Exception
      Console.WriteLine("Error:", ex.Message)
   End Try

   'Close file
   reader.Close()
End If
```