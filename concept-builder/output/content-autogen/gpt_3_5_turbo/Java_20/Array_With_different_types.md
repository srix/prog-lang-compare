In Java, you can create an array with different types by using the Object data type. Here's an example below:

```
Object[] myArray = new Object[5];
myArray[0] = "Hello";
myArray[1] = 10;
myArray[2] = true;
myArray[3] = 3.14;
myArray[4] = 'a';
```

In the above example, an array of type Object is created with a size of 5. The array can now store elements of different types such as String, integer, boolean, double, and char.

To access the specific element in the array, you can use the index value. For example:

```
System.out.println(myArray[0]); // Output: Hello
System.out.println(myArray[1]); // Output: 10
System.out.println(myArray[2]); // Output: true
System.out.println(myArray[3]); // Output: 3.14
System.out.println(myArray[4]); // Output: a
```

It is important to note that when retrieving elements from the array, it is necessary to cast them to their original types. For example:

```
String str = (String) myArray[0];  // Casting to String 
int num = (int) myArray[1];  // Casting to integer
boolean bool = (boolean)myArray[2]; // Casting to boolean
double d = (double) myArray[3]; // Casting to double
char c = (char) myArray[4]; // Casting to char
```

This can be a bit cumbersome, and it's generally recommended that you use a collection such as ArrayList if you need to store elements of different types.