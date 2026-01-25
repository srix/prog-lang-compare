In Java 20, there are several ways to reduce an array to a single value. One common way is to use the `reduce` method, which applies a binary operator to the elements of the array in sequence and returns a single result.

Here are some examples:

1. Summing the elements of an integer array using `reduce`:
```java
int[] arr = {1, 2, 3, 4, 5};
int sum = Arrays.stream(arr).reduce(0, (a, b) -> a + b);
System.out.println(sum); // prints 15
```

2. Finding the maximum element in an integer array using `reduce`:
```java
int[] arr = {1, 5, 3, 4, 2};
int max = Arrays.stream(arr).reduce(Integer.MIN_VALUE, (a, b) -> Math.max(a, b));
System.out.println(max); // prints 5
```

3. Concatenating all the strings in an array using `reduce`:
```java
String[] arr = {"hello", "world", "!"};
String result = Arrays.stream(arr).reduce("", (a, b) -> a + b);
System.out.println(result); // prints "helloworld!"
```

4. Counting the number of distinct characters in a string array using `reduce`:
```java
String[] arr = {"hello", "world", "!"};
int count = Arrays.stream(arr).reduce("", String::concat)
    .chars().distinct().count();
System.out.println(count); // prints 10
```

Note that the second argument to `reduce` in the above examples is a lambda expression that takes two arguments and returns a result. The first argument is the initial value of the reduction. In the last example, we use a method reference (`String::concat`) instead of a lambda expression.