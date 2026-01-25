In Groovy, you can get the index of an element in an array using the `indexOf` method as shown in the following example:

```groovy
def myArray = ['apple', 'banana', 'pear', 'orange']
def indexOfOrange = myArray.indexOf('orange')
println "The index of 'orange' is $indexOfOrange" // Output: The index of 'orange' is 3
```

In the above code, we first define an array of fruits and then call the `indexOf` method on it with the element whose index we want to find. The `indexOf` method returns the index of the first occurrence of the specified element in the array. If the element is not found, it returns -1.

You can also use the `findIndexOf` method to get the index of an element based on a condition. For example:

```groovy
def myArray = [10, 20, 30, 40]
def indexOfEvenNumber = myArray.findIndexOf { it % 2 == 0 }
println "The index of the first even number is $indexOfEvenNumber" // Output: The index of the first even number is 0
```

In the above example, we defined an array of numbers and then used the `findIndexOf` method to find the index of the first even number in the array. The `findIndexOf` method takes a closure as a parameter that determines the condition for finding the index. In this case, we used the `%` operator to check if the number is even or not. The `findIndexOf` method returns the index of the first element in the array that satisfies the condition specified in the closure. If no element satisfies the condition, it returns -1.