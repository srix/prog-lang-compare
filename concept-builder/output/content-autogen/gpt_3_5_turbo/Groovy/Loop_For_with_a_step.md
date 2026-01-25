In Groovy, the `for` loop is used to iterate over a range of values or elements of a collection. The `step` keyword can be used in a `for` loop to specify the increment value between each iteration. 

Here's an example of a `for` loop with a `step` keyword:

```
for (i in 0..10 step 2) {
    println(i)
}
```

In this example, the loop will start at 0 and increment by 2 until it reaches 10. The output will be:

```
0
2
4
6
8
10
```

The `step` keyword can also be used with collections, like this:

```
def myArray = [1, 2, 3, 4, 5]
for (num in myArray.step(2)) {
    println(num)
}
```

In this example, the `step(2)` method is called on the `myArray` collection to specify that the loop should iterate over every second element. The output will be:

```
1
3
5
```

So, the `step` keyword is used to control the increment value of a `for` loop in Groovy.