To sort an array in Java, you can use either the Arrays.sort() or the Collections.sort() method. Here are examples of how to use both methods:

Using Arrays.sort():

```java
int arr[] = {30, 10, 20, 50, 40};
Arrays.sort(arr);
System.out.println(Arrays.toString(arr));
```

Output: [10, 20, 30, 40, 50]

Explanation: In the code above, we first define an integer array named arr with values 30, 10, 20, 50, and 40. Then we use the Arrays.sort() method to sort the array in ascending order. Finally, we print the sorted array using the Arrays.toString() method.

Using Collections.sort():

```java
List<Integer> list = new ArrayList<Integer>();
list.add(30);
list.add(10);
list.add(20);
list.add(50);
list.add(40);
Collections.sort(list);
System.out.println(list);
```

Output: [10, 20, 30, 40, 50]

Explanation: In the code above, we first define an ArrayList named list and add integer elements to it. Then we use the Collections.sort() method to sort the list in ascending order. Finally, we print the sorted list.