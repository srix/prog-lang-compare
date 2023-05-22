Boolean data type in Groovy represents a logical value. It can have two possible values: `true` or `false`. Booleans are commonly used in conditional statements, loops and comparisons.

Here are some examples of using Boolean in Groovy:

1. Declaring and initializing a Boolean variable:

```groovy
def isSunny = true
```

2. Using Boolean in a conditional statement:

```groovy
if (isSunny) {
  println("It's a sunny day!")
} else {
  println("It's a cloudy day.")
}
```

3. Comparing two Boolean values:

```groovy
def isRaining = false

if (isSunny && !isRaining) {
  println("It's a beautiful day!")
}
```

4. Using Boolean as a return value:

```groovy
def isPrime(int num) {
  if (num == 2 || num == 3) {
    return true
  } else if (num <= 1 || num % 2 == 0) {
    return false
  }
  
  def i = 3
  while (i * i <= num) {
    if (num % i == 0) {
      return false
    }
    i += 2
  }
  return true
}
```

5. Boolean operations:

```groovy
def a = true
def b = false

//Negation
assert !b

//Logical OR
assert a || b

//Logical AND
assert a && b == false
``` 

These are just a few examples to demonstrate how Boolean can be used in Groovy code.