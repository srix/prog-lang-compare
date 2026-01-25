Sure! In C#, we create a hash by using the `System.Security.Cryptography` namespace. Here's an example:

```csharp
using System;
using System.Security.Cryptography;
using System.Text;

class Program
{
    static void Main(string[] args)
    {
        // Declare a string to hash
        string stringToHash = "Hello, world!";

        // Create a new instance of the SHA256 hashing algorithm
        SHA256 hasher = SHA256.Create();

        // Convert the string to a byte array
        byte[] bytesToHash = Encoding.UTF8.GetBytes(stringToHash);

        // Compute the hash and convert it back to a string
        byte[] hashBytes = hasher.ComputeHash(bytesToHash);
        string hash = Convert.ToBase64String(hashBytes);

        // Output the hash
        Console.WriteLine("Hash: " + hash);
    }
}
```

In this example, we create a SHA256 hash of the string "Hello, world!". The `SHA256.Create()` method creates a new instance of the SHA256 hashing algorithm, which we then use to compute the hash of the string by converting it to a byte array and passing it to the `ComputeHash()` method. We convert the hash back to a string using the `Convert.ToBase64String()` method, which encodes the hash as a base-64 string. Finally, we output the hash to the console.