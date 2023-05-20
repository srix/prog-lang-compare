In Java 20, to get the first and last element of an array, we use array indexing. The first element of an array has an index of 0, and the last element has an index of length - 1.

Here's an example for getting the first element:

```
int[] myArray = {1, 2, 3, 4, 5};
int firstElement = myArray[0];
System.out.println("The first element is: " + firstElement);
```

Output: `The first element is: 1`

And here's an example for getting the last element:

```
int[] myArray = {1, 2, 3, 4, 5};
int lastElement = myArray[myArray.length - 1];
System.out.println("The last element is: " + lastElement);
```

Output: `The last element is: 5`