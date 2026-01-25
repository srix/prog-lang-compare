In Swift, you can compare strings using the "==" operator. Here's an example:

```swift
let string1 = "apple"
let string2 = "orange"

if string1 == string2 {
    print("The strings are equal")
} else {
    print("The strings are not equal")
}
```

In this example, the strings "apple" and "orange" are compared using the "==" operator. Since they are not equal, the "else" block will be executed and the message "The strings are not equal" will be printed.

You can also use other comparison operators such as "!=" (not equal), "<" (less than), and ">" (greater than) to compare strings. Here are some more examples:

```swift
let string3 = "apple"
let string4 = "banana"

if string3 != string4 {
    print("The strings are not equal")
} else {
    print("The strings are equal")
}

if string3 < string4 {
    print("The first string comes before the second string")
} else if string3 > string4 {
    print("The first string comes after the second string")
} else {
    print("The strings are equal")
}
```

In the first example, the "!=" operator is used to check if the strings are not equal. Since string3 and string4 are not equal, the message "The strings are not equal" is printed.

In the second example, the "<" and ">" operators are used to compare the two strings. Since "apple" comes before "banana" in alphabetical order, the message "The first string comes before the second string" is printed.