To iterate over an array in Kotlin, you can use either a for loop or forEach loop. Here are the examples of both:

Using for loop:
```
val numbers = arrayOf(1, 2, 3, 4, 5)

for (number in numbers) {
    println(number)
}
```
Output:
```
1
2
3
4
5
```
Using forEach loop:
```
val numbers = arrayOf(1, 2, 3, 4, 5)

numbers.forEach { number ->
    println(number)
}
```
Output:
```
1
2
3
4
5
```
In both examples, we have defined an array `numbers` with five integer elements. In the first example, we use a for loop to iterate over the array elements one by one, and then we print each element using the `println` statement.

In the second example, we use the `forEach` method to iterate over each element in the array. Inside the `forEach` method, we define a lambda function that takes the current array element as an argument and prints it using the `println` statement.