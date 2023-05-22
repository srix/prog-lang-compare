In Julia, primitive types are the basic building blocks of all data types and they are used to create more complex data types. Julia's primitive types include numbers, boolean values, and characters.

Here are some examples of primitive types in Julia:

1. Integers: Integers are whole numbers with no fractional component. They can be either signed or unsigned. Examples include 1, 5, -10 etc.

```julia
# Unsigned integer: UInt8
x = UInt8(255) # The maximum value of an 8-bit unsigned integer
typeof(x) # UInt8
```

2. Floating-point numbers: Floating point numbers are real numbers with decimal points. They can be either single-precision or double-precision, depending on the number of bits used to store the value.

```julia
# 64-bit floating point number: Float64
y = 2.5
typeof(y) # Float64
```

3. Boolean values: Boolean values are either true or false. They are used in logical operations.

```julia
a = true
b = false
typeof(a) # Bool
```

4. Characters: Characters are used to represent individual letters, digits, or symbols. 

```julia
# ASCII character
c = 'A'
typeof(c) # Char
```

In conclusion, primitive types are the most basic data types in Julia and are used to construct more complex data types. They provide essential functionality to the language and allow for efficient and optimized calculations and computations.