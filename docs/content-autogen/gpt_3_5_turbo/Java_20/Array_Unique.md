To get the unique elements of an array in Java 20, we can follow these steps:

1. Create an ArrayList to store the unique elements.
2. Loop through the array and add each element to the ArrayList if it does not already exist.
3. Convert the ArrayList back to an array and return it.

Here is an example code:

```
public static int[] getUniqueElements(int[] arr) {
    ArrayList<Integer> list = new ArrayList<>();
    for (int i : arr) {
        if (!list.contains(i)) {
            list.add(i);
        }
    }
    int[] result = new int[list.size()];
    for (int i = 0; i < list.size(); i++) {
        result[i] = list.get(i);
    }
    return result;
}
```

Let's test the code with an example:

```
int[] arr = {1, 2, 3, 2, 4, 1, 5, 3, 6};
int[] uniqueArr = getUniqueElements(arr);
System.out.println(Arrays.toString(uniqueArr));
```

Output: `[1, 2, 3, 4, 5, 6]` 

In this example, the input array contains repeated elements. The `getUniqueElements` method removes the duplicates and returns an array with only the unique elements.