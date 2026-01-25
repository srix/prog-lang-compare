In Java 20, you can use constant list by declaring a list as final. Once you have declared a list to be final, it cannot be modified further. Here is an example:

```
final List<String> FRUITS = Arrays.asList("apple", "banana", "orange");
System.out.println("Fruits: " + FRUITS);
```

In this example, we have declared a constant list of fruits using the `Arrays.asList()` method. We then print the contents of the list using `System.out.println()`.

Once we have declared a list as final, we can still perform operations on it without modifying the list. For example:

```
int size = FRUITS.size();
boolean containsApple = FRUITS.contains("apple");
String thirdFruit = FRUITS.get(2);

System.out.println("Size: " + size);
System.out.println("Contains apple: " + containsApple);
System.out.println("Third fruit: " + thirdFruit);
```

In this example, we get the size of the list, check if it contains the string "apple", and get the third element of the list. We can perform these operations without modifying the list because we declared it as final.

Constant lists can be useful for situations where you want to ensure that the contents of a list do not change, or if you want to define a set of constants that can be easily accessed and used throughout your code.