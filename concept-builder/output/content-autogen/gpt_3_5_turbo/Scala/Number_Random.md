To generate random numbers in Scala, you can use the `scala.util.Random` class. Here is an example of how to use it:

```
import scala.util.Random

// Generate a random integer between 0 and 10
val randomInt = Random.nextInt(11)

// Generate a random double between 0.0 and 1.0
val randomDouble = Random.nextDouble()

// Generate a random boolean
val randomBool = Random.nextBoolean()
```

In the first example, the `nextInt` method generates a random integer between 0 and 10 (inclusive), and assigns it to the `randomInt` variable. The `11` argument is the upper bound, so `nextInt(11)` generates numbers between 0 and 10.

In the second example, the `nextDouble` method generates a random double between 0.0 and 1.0 (exclusive), and assigns it to the `randomDouble` variable.

In the third example, the `nextBoolean` method generates a random boolean with a 50/50 chance of being true or false, and assigns it to the `randomBool` variable.