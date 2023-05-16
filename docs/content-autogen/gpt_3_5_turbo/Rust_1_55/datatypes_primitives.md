In Rust 1.55, there are four primitive data types. They are:

1. `i32`: Signed 32-bit integer. It can store values between -2,147,483,648 and 2,147,483,647.

Example:
```
let x: i32 = 10;
let y: i32 = -5;
```

2. `f64`: 64-bit floating point number. It can represent decimal numbers with up to 16 decimal digits of precision.

Example:
```
let x: f64 = 3.14;
let y: f64 = -2.5;
```

3. `bool`: Boolean type. It can only have two values: `true` and `false`.

Example:
```
let x: bool = true;
let y: bool = false;
```

4. `char`: Single Unicode scalar value. It can represent any Unicode character, including emojis.

Example:
```
let x: char = 'a';
let y: char = '😀';
```

These types are called primitive types because they are the most basic data types in Rust. Other data types like arrays, tuples, and structs are built upon these primitive types.