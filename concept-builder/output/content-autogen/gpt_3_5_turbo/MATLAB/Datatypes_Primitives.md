In MATLAB, primitive types refer to the basic data types that are used to represent variables in the language. These types are called primitive because they cannot be broken down into smaller components and are not derived from any other type. MATLAB has five primitive types which are:

1. Double - The double data type is used to represent floating-point numbers. It takes up 8 bytes or 64 bits of memory and can hold values from approximately 1.8 x 10^-308 to 1.8 x 10^308, with a precision of around 15 decimal places. 

Example:

```
x = 3.14;
```

2. Single - The single data type is used to represent floating-point numbers with less precision than doubles. It takes up 4 bytes or 32 bits of memory and can hold values from approximately 1.18 x 10^-38 to 3.4 x 10^38, with a precision of around 7 decimal places.

Example:

```
y = single(2.5);
```

3. Int8 - The int8 data type is used to represent signed 8-bit integers. It takes up only 1 byte of memory and can hold values from -128 to 127.

Example:

```
a = int8(10);
```

4. Int16 - The int16 data type is used to represent signed 16-bit integers. It takes up 2 bytes of memory and can hold values from -32,768 to 32,767.

Example:

```
b = int16(-100);
```

5. Int32 - The int32 data type is used to represent signed 32-bit integers. It takes up 4 bytes of memory and can hold values from -2,147,483,648 to 2,147,483,647.

Example:

```
c = int32(1000);
```