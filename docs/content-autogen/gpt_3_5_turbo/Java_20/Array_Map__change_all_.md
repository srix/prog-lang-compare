To change all elements of an array in Java, you need to iterate over each element of the array and assign new values to them. Below are some examples:

Example 1: Changing all elements of an integer array to zero.

```java
int[] arr = {10, 20, 30, 40, 50};
for (int i = 0; i < arr.length; i++) {
    arr[i] = 0;
}
```

In this example, we have initialized an integer array `arr` with some values. Then we have used for loop to iterate over each element of the array, and assign zero to it. After the loop, the array will contain all values as zero.

Example 2: Changing all elements of a string array to empty string.

```java
String[] arr = {"hello", "world", "java"};
for (int i = 0; i < arr.length; i++) {
    arr[i] = "";
}
```

In this example, we have initialized a string array `arr` with some values. Then we have used for loop to iterate over each element of the array, and assign empty string to it. After the loop, the array will contain all values as empty string.

Example 3: Changing all elements of a boolean array to true.

```java
boolean[] arr = {false, false, false, false, false};
for (int i = 0; i < arr.length; i++) {
    arr[i] = true;
}
```

In this example, we have initialized a boolean array `arr` with all false values. Then we have used for loop to iterate over each element of the array, and assign true to it. After the loop, the array will contain all values as true.