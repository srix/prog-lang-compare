In Groovy, the `until` keyword is used in loops to execute a block of code repeatedly until a certain condition is met. The syntax for using `until` is as follows:

```
while (expression) {
    // code block to execute
}
```

Here, the `expression` is any logical expression that can be evaluated to `false`. Once the `expression` is evaluated to `false`, the loop stops.

Here's an example of how to use `until` in Groovy:

```
def count = 0
until (count == 5) {
    println(count)
    count++
}
```

In this example, the loop will run until the value of `count` is equal to `5`. The `println` statement inside the loop will print the value of `count` in each iteration. Once `count` is equal to `5`, the `until` loop will stop and the program will move on to the next line of code.

Another example of using `until` in Groovy is to iterate over a list:

```
def myList = [1, 2, 3, 4, 5]
for (i in 0.until(myList.size())) {
    println(myList[i])
}
```

In this example, the loop will iterate over each element of the `myList` list until it reaches the end of the list (as determined by `myList.size()`). The `println` statement inside the loop will print each element of the list in each iteration.

Note that the `until` keyword in Groovy is similar to the `while` keyword, but with the condition being negated. Therefore, the loop is executed as long as the condition is false.