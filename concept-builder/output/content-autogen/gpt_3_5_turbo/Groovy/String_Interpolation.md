In Groovy, you can interpolate strings by enclosing them in double-quotes and using the `${}` notation to embed Groovy expressions or variables within the string. Here are some examples:

1. Interpolating a variable:

```
def fruit = "apple"
println "I like to eat ${fruit}s." // Output: I like to eat apples.
```

2. Interpolating an expression:

```
def price = 1.99
def quantity = 3
println "The total cost is \$${price * quantity}." // Output: The total cost is $5.97.
```

3. Escaping special characters:

```
def name = "John Doe"
println "Hello, \${name}!" // Output: Hello, ${name}!
```

Note that you need to escape the dollar sign if you want to include it as a literal character in the string.