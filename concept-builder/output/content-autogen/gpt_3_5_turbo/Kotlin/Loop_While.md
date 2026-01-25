The `while` loop in Kotlin is used to execute a set of statements repeatedly until a condition is met. The basic syntax of a `while` loop is as follows:

```
while(condition){
    // code to be executed
}
```

Here, the `condition` is a boolean expression that is checked before each iteration of the loop. If the condition is true, the statements inside the loop are executed. When the condition becomes false, the loop terminates and control moves to the next statement after the loop.

Here is an example of a while loop that prints numbers from 1 to 5:

```
var count = 1
while(count <= 5){
    println(count)
    count++
}
```

In this example, the condition `count <= 5` is checked before each iteration. As long as the count is less than or equal to 5, the loop continues to execute. The `count` variable is incremented after each iteration so that the loop eventually terminates when `count` becomes greater than 5.

Another example of a `while` loop is to print all characters of a string:

```
val str = "Hello, world!"
var i = 0
while(i < str.length){
    println(str[i])
    i++
}
```

In this example, the `while` loop iterates over all the characters of the `str` string. The loop terminates when the `i` index becomes equal to the length of the string. The `println(str[i])` statement prints the character at index `i` of the string to the console, and the `i++` statement increments the index after each iteration.