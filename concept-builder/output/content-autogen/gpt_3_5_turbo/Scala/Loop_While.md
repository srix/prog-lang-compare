In Scala, `while` is a control structure used to repeatedly execute a block of statements as long as a particular condition is true. The syntax of the `while` loop in Scala is as follows:

```
while (condition) {
   // code to be executed
}
```

Here, the `condition` is a logical expression that is evaluated before every iteration of the loop. If the condition is true, then the code inside the loop is executed. When the code has been executed, the program control goes back to the beginning of the loop and checks the `condition` again. If the condition is still true, the code is executed again, and the process continues until the `condition` becomes false.

Here are a few examples of the while loop in Scala:

Example 1:

```
var i = 0

while(i < 5) {
    println(i)
    i += 1
}
```

In this example, the loop will run as long as `i` is less than `5`. It will print the value of `i` and then increment the value of `i` by `1`. The loop will terminate when the value of `i` becomes `5`. The output of this code will be:

```
0
1
2
3
4
```

Example 2:

```
var i = 10

while(i >= 0) {
    println(i)
    i -= 2
}
```

In this example, the loop will run as long as `i` is greater than or equal to `0`. It will print the value of `i` and then decrement the value of `i` by `2`. The loop will terminate when the value of `i` becomes `-2`. The output of this code will be:

```
10
8
6
4
2
0
```

Example 3:

```
val fruits = Array("apple", "banana", "mango", "orange")

var i = 0

while(i < fruits.length) {
    println(fruits(i))
    i += 1
}
```

In this example, we have an array of fruits. The loop will run as long as `i` is less than the length of the `fruits` array. It will print the value of the i-th element of the array and then increment the value of `i` by `1`. The loop will terminate when the value of `i` becomes the length of the `fruits` array. The output of this code will be:

```
apple
banana
mango
orange
```