In C#, you can concatenate two arrays using the `Concat` method. Here is an example:

```
int[] array1 = { 1, 2, 3 };
int[] array2 = { 4, 5, 6 };
int[] result = array1.Concat(array2).ToArray();
```

In this example, we have two integer arrays, `array1` and `array2`. We concatenate them using the `Concat` method and then convert the result to an array using `ToArray`. The `result` array will contain all the elements from `array1` followed by all the elements from `array2`.

Another example:

```
string[] array1 = { "hello", "world" };
string[] array2 = { "everyone" };
string[] result = array1.Concat(array2).ToArray();
```

In this example, we have two string arrays, `array1` and `array2`. We concatenate them using the `Concat` method and then convert the result to an array using `ToArray`. The `result` array will contain all the elements from `array1` followed by the single element from `array2`.