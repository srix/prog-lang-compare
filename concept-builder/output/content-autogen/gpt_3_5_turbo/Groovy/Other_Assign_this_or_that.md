In Groovy, you can use the `?` operator, also known as the Elvis operator, to assign a value conditionally. The syntax is as follows:

```
def variable = someValue ?: defaultValue
```

This will assign `someValue` to `variable` if it is not null, otherwise it will assign `defaultValue`. Here are some examples:

```
def name = null
def greeting = "Hello, " + (name ?: "Anonymous")
println(greeting)
// Output: Hello, Anonymous

name = "Alice"
greeting = "Hello, " + (name ?: "Anonymous")
println(greeting)
// Output: Hello, Alice
``` 

In these examples, `name` is assigned a value of null at first, so the `?` operator is used to check if `name` is null before concatenating it with the greeting. Since it is null, the default value "Anonymous" is used instead. Later, `name` is assigned a non-null value, so the `?` operator uses that value instead.