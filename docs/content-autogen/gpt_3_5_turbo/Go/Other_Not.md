In Go, `not` is represented by the exclamation mark (`!`) and it is used to invert a boolean value. For example, if a boolean expression is true, applying not to it will result in false, and vice versa. Here are some examples:

```
a := true
b := !a
fmt.Println(a) // true
fmt.Println(b) // false
```

In this example, `a` is assigned a value of true, and `b` is assigned the inverse of `a`, which is false.

```
x := 5
y := 10
fmt.Println(x != y) // true
fmt.Println(!(x != y)) // false
```

In this example, the expression `x != y` evaluates to true because 5 is not equal to 10. Applying not to this expression using `!` results in false. 

```
z := "hello"
fmt.Println(!z) // invalid operation: !z (operator ! not defined on string)
```

In this example, `not` cannot be applied to the string value `z` because `not` is only defined for boolean values. This produces a compile-time error.