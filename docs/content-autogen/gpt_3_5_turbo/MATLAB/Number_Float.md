Sure, here's a brief explanation along with examples:

In MATLAB, floating-point numbers (also known as numbers with a decimal point) can be represented using either the single-precision (float) or double-precision (double) data types.

Single-precision:

Single-precision floating-point numbers use 32 bits to represent a real number with a precision of approximately 6-7 decimal digits.

Example:

```matlab
a = 3.14159;
b = single(3.14159);
```

In this example, `a` is a single-precision floating-point number represented using the default `double` data type. `b` is also a single-precision floating-point number, but it is explicitly represented using the `single` function.

Double-precision:

Double-precision floating-point numbers use 64 bits to represent a real number with a precision of approximately 15-16 decimal digits.

Example:

```matlab
c = 3.14159;
d = double(3.14159);
```

In this example, `c` is a double-precision floating-point number represented using the default `double` data type. `d` is also a double-precision floating-point number, but it is explicitly represented using the `double` function.

It's important to note that operations between single-precision and double-precision floating-point numbers can result in loss of precision. To maintain precision, it is recommended to use either solely single precision or solely double precision. 