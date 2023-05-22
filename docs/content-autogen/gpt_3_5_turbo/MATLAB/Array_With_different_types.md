In MATLAB, arrays can be created with different data types using either the cell array or the structure array. 

A cell array can contain values of any data type, such as strings, numbers, and even other arrays. Here is an example of how to create a cell array with different data types:

```
myArray = { 'John', 25, true, [1 2 3] };
```

In this example, the cell array contains a string, a number, a logical value, and a numeric array.

A structure array, on the other hand, can contain fields with different data types. Each field can contain a scalar or an array. Here is an example of how to create a structure array:

```
person.name = 'John';
person.age = 25;
person.isMale = true;
person.favorites = [3.14, 'ice cream'];
```

In this example, we have created a structure array called "person" with four fields of different data types. The "name" and "age" fields are scalars of string and double data types, respectively. The "isMale" field is a logical scalar. The "favorites" field is an array containing a double and a string.

Both cell and structure arrays are powerful tools that can be used to efficiently store and process data of different types in MATLAB.