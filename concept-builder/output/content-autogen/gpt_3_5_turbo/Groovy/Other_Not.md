In Groovy, `not` is a logical operator that negates the value of a boolean expression. 

Here are some examples of how to use `not` in Groovy:

1. Negating a boolean value
```groovy
def isHuman = true
def isAlien = !isHuman

println(isAlien) // Output: false
```

2. Negating a logical expression
```groovy
def x = 15
def y = 20

if (!(x < y)) {
    println("x is greater than or equal to y")
} else {
    println("x is less than y")
}

// Output: x is greater than or equal to y
```

3. Using `not` with conditional statements
```groovy
def isSunny = false

if (!isSunny) {
    println("Take an umbrella with you.")
} else {
    println("You don't need an umbrella today.")
}

// Output: Take an umbrella with you.
```

In all these examples, the `not` operator is used to invert the boolean value or negate the logical expression.