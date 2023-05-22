In Go, primitive types are basic data types that are directly supported by the language and are built-in. There are four primitive types in Go:

1. Boolean: The Boolean type represents a boolean value which can be either true or false. It is represented by the keyword "bool".

Example: 
```
var x bool = true
var y bool = false
```

2. Numeric types: Numeric types are used to represent numeric values and are divided into two categories: integer types and floating-point types.

- Integer types: Integer types are used to represent whole numbers. They can be either signed (positive, negative or zero) or unsigned (positive or zero).

  Example:
  ```
  var i int = 10             // Signed integer
  var j uint = 20            // Unsigned integer
  ```

- Floating-point types: Floating-point types are used to represent fractional values. They can be either float32 or float64.

  Example:
  ```
  var k float32 = 3.1416     // Floating-point number with precision of 32 bits
  var l float64 = 3.1415926  // Floating-point number with precision of 64 bits
  ```

3. String: The string type is used to represent text. It is a collection of characters enclosed within double quotes.

Example:
```
var message string = "Hello, World!"
```

4. Rune: The rune type represents a Unicode character. It is equivalent to an int32 data type.

Example:
```
var r rune = 'a'
```