In Java, we can concatenate two arrays of the same data type using the `Arrays.copyOf()` or `System.arraycopy()` method.

Here is an example using `Arrays.copyOf()`:

```
int[] array1 = {1, 2, 3};
int[] array2 = {4, 5, 6};

int[] result = Arrays.copyOf(array1, array1.length + array2.length);
System.arraycopy(array2, 0, result, array1.length, array2.length);

System.out.println(Arrays.toString(result));  // Output: [1, 2, 3, 4, 5, 6]
```

Here is another example using `System.arraycopy()`:

```
int[] array1 = {1, 2, 3};
int[] array2 = {4, 5, 6};

int[] result = new int[array1.length + array2.length];
System.arraycopy(array1, 0, result, 0, array1.length);
System.arraycopy(array2, 0, result, array1.length, array2.length);

System.out.println(Arrays.toString(result));  // Output: [1, 2, 3, 4, 5, 6]
```

In both examples, we create two arrays `array1` and `array2`, and then concatenate them into a new array called `result`. We can then print out the contents of `result` using `Arrays.toString()` method.

The first example uses `Arrays.copyOf()` to create `result` array of size `array1.length + array2.length`, copies the contents of `array1` to `result`, and then copies the contents of `array2` to `result` starting from index `array1.length`.

The second example creates `result` array of size `array1.length + array2.length`, copies the contents of `array1` to `result` starting from index `0`, and then copies the contents of `array2` to `result` starting from index `array1.length`.