In Go, you can compare strings with the `==` and `!=` operators. Here's an example of using the `==` operator:

```go
str1 := "apple"
str2 := "orange"

if str1 == str2 {
    fmt.Println("The strings are equal.")
} else {
    fmt.Println("The strings are not equal.")
}
```

This code creates two strings (`str1` and `str2`) with different values and then uses the `==` operator to compare them. Since the strings are not equal, the code will print "The strings are not equal."

Another example using the `!=` operator:

```go
str1 := "apple"
str2 := "orange"

if str1 != str2 {
    fmt.Println("The strings are not equal.")
} else {
    fmt.Println("The strings are equal.")
}
```

This code uses the `!=` operator to compare the strings. Since the strings are not equal, the code will print "The strings are not equal."