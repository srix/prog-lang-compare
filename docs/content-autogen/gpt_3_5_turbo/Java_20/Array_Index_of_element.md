In Java 20, you can use the `indexOf` method to get the index of an element in an array. This method returns the index of the first occurrence of the element in the array, or -1 if the element is not found. Here's an example:

```java
int[] numbers = { 5, 10, 15, 20, 25 };

int index = Arrays.indexOf(numbers, 15);

System.out.println(index); // Output: 2
```

In the example above, we have an array of integers `numbers` containing the values 5, 10, 15, 20, and 25. We call the `indexOf` method on the `Arrays` class and pass in the array `numbers` and the element we're looking for, which is 15. The method returns the index of the first occurrence of 15 in the array, which is 2.

Here's another example where the element is not found in the array:

```java
int[] numbers = { 5, 10, 15, 20, 25 };

int index = Arrays.indexOf(numbers, 30);

System.out.println(index); // Output: -1
```

In this example, we're looking for the element 30 in the array `numbers`. Since 30 is not found in the array, the `indexOf` method returns -1.