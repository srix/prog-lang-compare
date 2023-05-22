In Groovy, we can compare numbers using comparison operators. The comparison operators in Groovy are as follows:

- `==`: Equal to
- `!=`: Not equal to
- `<`: Less than
- `>`: Greater than
- `<=`: Less than or equal to
- `>=`: Greater than or equal to

Here are some examples:

```
def a = 5
def b = 10

// Equal to
if (a == b) {
    println("a is equal to b")
} else {
    println("a is not equal to b")
}

// Not equal to
if (a != b) {
    println("a is not equal to b")
} else {
    println("a is equal to b")
}

// Less than
if (a < b) {
    println("a is less than b")
} else {
    println("a is greater than or equal to b")
}

// Greater than
if (a > b) {
    println("a is greater than b")
} else {
    println("a is less than or equal to b")
}

// Less than or equal to
if (a <= b) {
    println("a is less than or equal to b")
} else {
    println("a is greater than b")
}

// Greater than or equal to
if (a >= b) {
    println("a is greater than or equal to b")
} else {
    println("a is less than b")
}
```

Output:

```
a is not equal to b
a is not equal to b
a is less than b
a is less than or equal to b
a is less than or equal to b
a is less than or equal to b
```