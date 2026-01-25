In Kotlin, there are several ways to generate random numbers. 

1. Using the Kotlin Random class:

To generate random numbers using the Kotlin Random class, you can create an instance of the Random class and call the nextInt(), nextDouble(), nextFloat(), or nextLong() methods on it. 

Example:

```
val random = Random()
val randomNumber = random.nextInt(100)
println(randomNumber)
```

This code will generate a random integer between 0 and 100 (excluding 100) and print it to the console.

2. Using the Math.random() method:

You can also use the Math.random() method to generate random numbers in Kotlin. This method returns a random double value between 0.0 (inclusive) and 1.0 (exclusive).

Example:

```
val randomNumber = (Math.random() * 100).toInt()
println(randomNumber)
```

This code will generate a random integer between 0 and 99 (inclusive) and print it to the console.

3. Using the Kotlin extensions library:

The Kotlin extensions library provides a random() function that you can use to generate random numbers. This function can generate integers, longs, floats, and doubles.

Example:

```
val randomNumber = random.nextInt(100)
println(randomNumber)
```

This code will generate a random integer between 0 and 100 (excluding 100) and print it to the console. 

Note that to use this function, you need to import the kotlin.random package:

```
import kotlin.random.Random as random
```