In Java, you can count the number of elements in an array that match a certain condition by using a for loop and an if statement.

Here is an example code snippet that counts the number of even numbers in an integer array:

```java
int[] numbers = {2, 3, 4, 5, 6, 7, 8};
int evenCount = 0;

for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenCount++;
    }
}

System.out.println("There are " + evenCount + " even numbers in the array.");
```

In this example, the array `numbers` contains 7 integers. The variable `evenCount` is initialized to 0 to keep track of the number of even numbers found in the array. 

The for loop iterates through each element of the array. The if statement checks whether the current number is even by using the modulus operator to determine if it leaves a remainder when divided by 2. If the number is even, the `evenCount` variable is incremented by 1.

After all elements of the array have been checked, the program outputs the total number of even numbers found in the array.

This same technique can be used to count the number of elements in an array that match any condition you choose.