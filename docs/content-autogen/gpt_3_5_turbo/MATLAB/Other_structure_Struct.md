In MATLAB, a struct is a data structure that can hold different types of data. It is particularly useful when you have data that consists of multiple variables or fields. The basic syntax to create a struct is:

```
s = struct('field1', value1, 'field2', value2, ...)
```

Here's an example to create a struct with two fields, 'name' and 'age':

```
s = struct('name', 'John Smith', 'age', 25)
```

To access the value of a field in a struct, you can use the dot notation:

```
s.name
```

This will return the value 'John Smith'.

You can also access struct fields using dynamic field references:

```
field = 'name';
s.(field)
```

This will also return the value 'John Smith'.

Another way to create a struct is to use the struct function with no arguments:

```
s = struct()
s(1).name = 'John Smith';
s(1).age = 25;
s(2).name = 'Jane Doe';
s(2).age = 30;
```

This creates an array of structs with two elements. Each element has its own 'name' and 'age' fields.

You can also use struct arrays to create tables with data. Here's an example of a struct array that represents a table of student grades:

```
student(1).name = 'John Smith';
student(1).grade = 85;
student(2).name = 'Jane Doe';
student(2).grade = 90;
student(3).name = 'Bob Johnson';
student(3).grade = 80;
```

With struct arrays, you can use logical indexing to select elements that satisfy certain conditions. For example, to select all students with grades higher than 85:

```
student([student.grade] > 85)
```

This will return a struct array with students 'Jane Doe' and 'John Smith'.