In Java, arrays are used to store multiple values of the same data type. To iterate over an array in Java, you can use loops like for, while, and enhanced for loops. Here are examples of iterating over an array in Java:

1. Using for loop:

```
int[] arr = {1, 2, 3, 4, 5};
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}
```

2. Using while loop:

```
int[] arr = {1, 2, 3, 4, 5};
int i = 0;
while (i < arr.length) {
    System.out.println(arr[i]);
    i++;
}
```

3. Using enhanced for loop:

```
int[] arr = {1, 2, 3, 4, 5};
for (int num : arr) {
    System.out.println(num);
}
```

Note that the enhanced for loop is only available from Java 5 onwards.