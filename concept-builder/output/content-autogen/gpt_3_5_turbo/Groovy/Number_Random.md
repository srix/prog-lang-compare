In Groovy, you can use the `Random` class to generate random numbers. Here are a few examples to show how to use it:

1. To generate a random integer between 0 and a specified maximum value (inclusive), use the `nextInt` method:

```
import java.util.Random

def random = new Random()
def max = 10
def randomNumber = random.nextInt(max + 1)
println(randomNumber)
```

This will output a random integer between 0 and 10 (inclusive).

2. To generate a random double between 0 and 1 (exclusive), use the `nextDouble` method:

```
import java.util.Random

def random = new Random()
def randomNumber = random.nextDouble()
println(randomNumber)
```

This will output a random double between 0 and 1 (exclusive).

3. To generate a random boolean, use the `nextBoolean` method:

```
import java.util.Random

def random = new Random()
def randomBoolean = random.nextBoolean()
println(randomBoolean)
```

This will output either `true` or `false` randomly.

4. To generate a random long between 0 and a specified maximum value (inclusive), use the `nextLong` method:

```
import java.util.Random

def random = new Random()
def max = 1000000000
def randomNumber = random.nextLong(max + 1)
println(randomNumber)
```

This will output a random long between 0 and 1000000000 (inclusive).

Note: It's important to always create a new `Random` object to ensure true randomness in your generated numbers.