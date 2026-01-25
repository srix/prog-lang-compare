In PHP, creating an array with different types is similar to creating a regular array. The only difference is that you can include different data types in the array. Here are some examples:

Example 1: Creating an array with different types explicitly

```
$myArray = array("John", 25, 3.14, true);
```

In the above example, the array contains four elements which are a string, an integer, a floating-point number, and a boolean. 

Example 2: Creating an array with different types implicitly

```
$myArray[] = "Apple";
$myArray[] = 25;
$myArray[] = true;
```

In the above example, we are adding elements to the array using array index. Here, we have a string, an integer, and a boolean. 

Example 3: Creating a multidimensional array with different types

```
$myArray = array(
  array("John", 25),
  array("Mary", true),
  array(3.14, "Orange")
);
```

In the above example, we have a 2D array with three elements, each containing two different types of data. 

Using these examples, you can create arrays with different types of elements in PHP.