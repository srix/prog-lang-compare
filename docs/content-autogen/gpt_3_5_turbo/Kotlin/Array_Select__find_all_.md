In Kotlin, you can find all elements of an array satisfying a condition by using the filter() method. The filter() method returns a new list containing only the elements that satisfy the specified condition. Here's an example code snippet:

```
val numbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9)
val evenNumbers = numbers.filter { it % 2 == 0 }
print(evenNumbers) // Output: [2, 4, 6, 8]
```

In this example, we have an array of numbers from 1 to 9. We want to find all the even numbers in the array. To do this, we call the filter() method on the numbers array and pass a lambda expression as an argument. The lambda expression uses the modulus operator (%) to determine if each number is even or not. If the remainder after dividing by 2 is 0, then we know the number is even and it gets included in the new list called evenNumbers.

You can replace the condition inside the curly braces to filter the elements based on different criteria. For example, if you want to find all the elements that are greater than 5, you can update the code like this:

```
val numbers = arrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9)
val greaterThanFive = numbers.filter { it > 5 }
print(greaterThanFive) // Output: [6, 7, 8, 9]
```

In this example, we used the greater than operator (>) instead of the modulus operator to find elements greater than 5. The filter() method tests each element in the numbers array against the condition specified in the lambda expression, and returns only the elements that satisfy the condition.