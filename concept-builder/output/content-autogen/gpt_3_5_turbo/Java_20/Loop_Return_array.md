In Java, we can return an array using the return statement in a method. Here's an example code:

```
public class ArrayExample {
    public static void main(String args[]) {
        int[] arr = getArray();
        for (int i : arr) {
            System.out.println(i);
        }
    }

    public static int[] getArray() {
        int[] arr = new int[5];
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        arr[3] = 40;
        arr[4] = 50;
        return arr;
    }
}
```

In this code, we have created a method `getArray()` which returns an integer array. The array is initialized with 5 elements and the elements are assigned some values. The `arr` array is then returned from the method using the return statement.

This array is then assigned to another array `arr` in the main method. We are then printing the values of the array using a for-each loop.

This code will output the following:

```
10
20
30
40
50
```

So, to return an array in Java, we need to declare a method that returns an array of the required type, initialize the array with values, and return the array using the return statement.