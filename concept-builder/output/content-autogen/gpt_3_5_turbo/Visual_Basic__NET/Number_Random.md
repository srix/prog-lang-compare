In Visual Basic .NET, you can generate random numbers using the `System.Random` class. This class contains various methods to generate random numbers based on different data types. Here's an example on how to generate random numbers in Visual Basic .NET:

```vb.net
'Create a new instance of the Random class
Dim rand As New Random()

'Generate a random integer between 0 and 10
Dim randomNumber As Integer = rand.Next(11)

'Generate a random double between 0 and 1
Dim randomDouble As Double = rand.NextDouble()

'Generate a random boolean value
Dim randomBool As Boolean = (rand.Next(2) = 0)
```

In the example above, we created a new instance of the `Random` class, which we used to generate random numbers of different data types. To generate a random integer, we called the `.Next()` method with the maximum value that we want to generate (in this case, 11). To generate a random double, we called the `.NextDouble()` method. To generate a random boolean value, we called the `.Next()` method with a maximum value of 2 (which will generate either 0 or 1) and then checked if the result was equal to 0.

Note that the `Random` class generates pseudo-random numbers, which means that the numbers are not truly random. However, for most applications, this level of randomness is sufficient.