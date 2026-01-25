In Lua, a struct is a data structure that allows you to define a group of related variables under one name. You can create a struct type by defining the variables that make up the struct. Then you can create instances of that struct by assigning values to its variables.

Here's an example of how to define a struct in Lua:

```
-- define a struct type
Person = { name = "", age = 0, gender = "" }
```

In this example, we have defined a struct type called "Person" that contains three variables: "name", "age", and "gender".

To create an instance of this struct, you can set the values of its variables:

```
-- create an instance of Person struct
person1 = { name = "John Doe", age = 30, gender = "Male" }
person2 = { name = "Jane Smith", age = 25, gender = "Female" }
```

In this example, we have created two instances of the "Person" struct: "person1" and "person2". We have assigned values to their variables to define their properties.

Now that we have created instances of the struct, we can access their variables just like any other Lua variable:

```
-- access values of struct variables
print(person1.name) -- outputs "John Doe"
print(person2.age) -- outputs "25"
```

With struct, you can organize your data into logical units, making it easier to manage and access. It is particularly useful when dealing with complex data structures that contain many variables.