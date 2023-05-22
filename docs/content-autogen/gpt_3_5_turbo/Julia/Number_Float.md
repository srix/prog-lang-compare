In Julia, float numbers can be created using decimal notation with a dot (`.`) or scientific notation with the `e` operator. The default floating point type in Julia is 64-bit double precision (Type: `Float64`).

Here are some examples:

1. Decimal notation:

```
x = 1.23
y = 4.56
```

2. Scientific notation:

```
a = 1e-6 # 1x10^-6
b = 3e5 # 3x10^5
```

3. Mathematical operations:

```
x = 5.0 + 2.5 # 7.5
y = 3.0 / 2.0 # 1.5
z = 2.0 ^ 3.0 # 8.0
```

4. Type conversion:

```
a = 4
b = Float64(a) # 4.0
c = convert(Float64, a) # 4.0
```

Note that Julia supports multiple types of floating point numbers:
- `Float16`: Half-precision floating-point number
- `Float32`: Single-precision floating-point number
- `Float64`: Double-precision floating-point number.