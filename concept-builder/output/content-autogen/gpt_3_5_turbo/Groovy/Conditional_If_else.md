Sure, here's an example of using if-else statements in Groovy:

```
def a = 10
def b = 20

if (a > b) {
    println("a is greater than b")
} else if (a < b) {
    println("b is greater than a")
} else {
    println("a and b are equal")
}
```

In this example, we have two variables, `a` and `b`. We use if-else statements to compare their values and print out a different message depending on the outcome. 

If `a` is greater than `b`, it will print out `"a is greater than b"`. If `b` is greater than `a`, it will print out `"b is greater than a"`. And if `a` and `b` are equal, it will print out `"a and b are equal"`. 

We can also use the ternary operator in Groovy. Here's an example:

```
def x = 5
def y = 10

def result = (x > y) ? "x is greater than y" : "y is greater than x"

println(result)
```

In this example, we use the ternary operator to compare the values of `x` and `y`. If `x` is greater than `y`, it will return `"x is greater than y"`. Otherwise, it will return `"y is greater than x"`. 

We then assign the result to a variable called `result` and print it out.