In Java, we can iterate over an array using a for loop with the index. Here's an example:

```
int[] nums = {10, 20, 30, 40, 50};

for (int i = 0; i < nums.length; i++) {
    System.out.println("Value at index " + i + " is " + nums[i]);
}
```

In this example, we declare an integer array called `nums` with 5 values. We use a for loop to iterate over the array, starting from index 0 and ending at the last index (`nums.length` - 1). On each iteration, we print the index, along with the value at that index.

Output:
```
Value at index 0 is 10
Value at index 1 is 20
Value at index 2 is 30
Value at index 3 is 40
Value at index 4 is 50
```

Another way to iterate over an array with its index is by using the enhanced for loop (for-each loop) in combination with the `java.util.Arrays` utility class:

```
import java.util.Arrays;

int[] nums = {10, 20, 30, 40, 50};

int index = 0;
for (int num : nums) {
    System.out.println("Value at index " + index++ + " is " + num);
}

// Alternatively, we can directly use the Arrays utility class for printing
System.out.println(Arrays.toString(nums));
```

In this example, we first import the `Arrays` utility class. Then, we declare and initialize our integer array `nums`. We then use an enhanced for loop to iterate over the array, where `num` represents the value at each index. We also declare a separate `index` variable to keep track of the current index. On each iteration, we print the index (using the `index++` syntax, which increments the index after using it), along with the value at that index.

As an alternative, we can directly use the `Arrays.toString()` method from the `Arrays` utility class to print the entire array as a string.

Output:
```
Value at index 0 is 10
Value at index 1 is 20
Value at index 2 is 30
Value at index 3 is 40
Value at index 4 is 50

[10, 20, 30, 40, 50]
```