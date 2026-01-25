In MATLAB, fields are like variables that are part of a structure. A structure is a data type that groups together related data items of different data types. 

To use fields in a class, you first need to define a class that includes a property of type struct.

Here's an example:

```
classdef MyClass
    properties
        myStruct
    end
end
```

This creates a new class `MyClass` with a single property - `myStruct`. This property is of type struct.

Once the class is defined, you can access and modify the fields of the struct property using the dot notation. For example:

```
% Create an instance of MyClass
myObject = MyClass;

% Set a value for a field in the myStruct property
myObject.myStruct.x = 12;

% Get the value of a field using dot notation
value = myObject.myStruct.x;
```

This code creates a new instance of `MyClass`, sets the value of the `x` field in the `myStruct` property to 12, and then gets the value of that field and stores it in the `value` variable.

Fields in a struct can have different data types, such as numbers, characters, and even other structs. Here's an example:

```
% Create a new field in the myStruct property
myObject.myStruct.y = 'Hello';

% Create a struct and assign it to a new field in myStruct
data.x = 10;
data.y = 'World';
myObject.myStruct.z = data;
```

Here, we add a new field `y` to `myStruct`, which is a string. We also create a new struct `data` with two fields `x` and `y`, and then assign it to a new field `z` in `myStruct`. Note that access to fields in nested structs uses the dot notation as well, like this: `myObject.myStruct.z.x`.