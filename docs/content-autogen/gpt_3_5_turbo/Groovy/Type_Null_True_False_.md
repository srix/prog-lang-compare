In Groovy, the keyword `null` is used to represent the absence of a value or non-existence of an object. The keywords `true` and `false` are used to represent boolean values.

Here are some examples of how to check whether a value is `null`, `true`, or `false` in Groovy:

Checking if a value is null:
```groovy
def myValue = null
if (myValue == null) {
    println("The value is null.")
} else {
    println("The value is not null.")
}
```

Checking if a value is true:
```groovy
def myValue = true
if (myValue) {
    println("The value is true.")
} else {
    println("The value is not true.")
}
```

Checking if a value is false:
```groovy
def myValue = false
if (!myValue) {
    println("The value is false.")
} else {
    println("The value is not false.")
}
```

Note that in the last example, we used the negation operator (`!`) to check if the value is false. This is because `false` is considered a "falsy" value in Groovy, so just checking `if (myValue)` would not give the desired result.