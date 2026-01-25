In Rust 1.55, there are several primitive types available, including bool, char, integer types, and floating-point types. Here are some examples of these primitive types in Rust:

1. bool: The bool type represents Boolean logic values and can only have two values, true or false. Example: 

   ```rust
   let x: bool = true;
   let y: bool = false;
   ```

2. char: The char type represents a Unicode scalar value and can be enclosed in single quotes. Example:

   ```rust
   let c: char = 'A';
   ```

3. integers: Rust provides a several integer types that differ by their size and whether they are signed or unsigned, including i8, i16, i32, i64, u8, u16, u32, u64, and isize (architecture-dependent signed integer) and usize (architecture-dependent unsigned integer). Example:

   ```rust
   let i: i32 = -42;
   let u: u64 = 42;
   ```

4. floating-point types: Rust has two primitive floating-point types, f32 and f64, which represent single-precision and double-precision floating-point numbers, respectively. Example:

   ```rust
   let f: f64 = 3.14159;
   ``` 

These primitive types are the building blocks on which more complex types and data structures are built.