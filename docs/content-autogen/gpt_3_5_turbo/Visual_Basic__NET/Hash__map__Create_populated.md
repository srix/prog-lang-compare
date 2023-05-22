In Visual Basic .NET, a hash is created using a HashAlgorithm class. This class provides a range of algorithms such as MD5, SHA-1, SHA-256, and SHA-512, which can be used to calculate the hash value of data.

Here is an example of how to create a hash using the MD5 algorithm:

```
Dim data As Byte() = Encoding.ASCII.GetBytes("Hello, World!")
Dim md5 As New MD5CryptoServiceProvider()
Dim hash As Byte() = md5.ComputeHash(data)

'Convert the hash to a hexadecimal string
Dim result As String = ""
For Each b As Byte In hash
    result += b.ToString("x2")
Next

Console.WriteLine("MD5 hash of 'Hello, World!': " + result)
```

In this example, we first convert the input string "Hello, World!" into a byte array using the ASCII encoding. We then create a new instance of the MD5CryptoServiceProvider class, which is used to compute the hash value of the input data. The ComputeHash method takes the input data as a parameter and returns the hash value as a byte array.

To display the hash value, we convert the byte array to a string of hexadecimal digits using a loop that iterates through each byte in the array and converts it to a string of two hexadecimal digits using the "x2" format specifier. Finally, we concatenate these individual strings to get the complete hash value result.

Other algorithms such as SHA-1, SHA-256, and SHA-512 can be used in a similar way by creating an instance of the corresponding HashAlgorithm class and calling the ComputeHash method with the input data.