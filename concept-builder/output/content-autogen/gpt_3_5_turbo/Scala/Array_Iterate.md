In Scala, we can use various methods and loops to iterate over an array. Here are few examples with explanations:

1. Using for loop: 

The for loop is the most commonly used loop in Scala. We can iterate over an array using for loop as shown below:

```scala
val arr = Array(1, 2, 3, 4, 5)

for(i <- arr){
  println(i)
}
```

In the above example, we have created an array of integers and used for loop to iterate over it. Here, `i` is the loop variable and the `for` loop iterates over all the elements in the array and prints them.

2. Using foreach method:

Scala provides a `foreach` method, which can be used to iterate over an array as shown below:

```scala
val arr = Array(1, 2, 3, 4, 5)

arr.foreach(println)
```

In the above example, we have used the `foreach` method to iterate over the array. The method takes a single argument, which is a function that will be applied to each element of the array. Here, we have passed `println` function which prints each element of the array.

3. Using while loop:

We can also use a `while` loop to iterate over an array as shown below:

```scala
val arr = Array(1, 2, 3, 4, 5)

var i = 0
while(i < arr.length){
  println(arr(i))
  i += 1
}
```

In the above example, we have used a `while` loop to iterate over the array. Here, `i` is the loop variable which starts from 0 and goes up to the length of the array. Inside the loop, we print the element at the `i`th index and increment the value of `i` by 1.

These are the three ways we can iterate over an array in Scala.