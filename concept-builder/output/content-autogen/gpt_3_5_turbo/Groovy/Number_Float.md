Float numbers in Groovy are represented by the keyword `float`, and they are used to represent decimal values. Here are some examples of how to use float numbers in Groovy:

Example 1: Simple float variable declaration and initialization:

```
float height = 6.2f
```

Example 2: Arithmetic operations using float variables:

```
float length = 10.5f
float width = 5.4f
float area = length * width
```

Example 3: Type conversion from other data types to float:

```
def integerNumber = 5
float floatNumber = integerNumber as float
```

Example 4: String to float conversion:

```
String str = "2.4"
float floatNumber = Float.parseFloat(str)
```

In general, you can perform all arithmetic operations on float numbers, and you can mix them with other numeric data types such as `int` and `double`.