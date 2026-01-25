In Scala, there are several ways to compare strings. Here are some of the common ways to compare strings in Scala:

1. Using the "==” operator: This operator is used to compare values for equality. Example: 

```
val str1 = "hello"
val str2 = "world"
if (str1 == str2) {
  println("Strings are equal")
} else {
  println("Strings are not equal")
}
```

Output: Strings are not equal 


2. Using the "equals" method: This method compares two strings for their contents. Example: 

```
val str1 = "hello"
val str2 = "world"
if (str1.equals(str2)) {
  println("Strings are equal")
} else {
  println("Strings are not equal")
}
```

Output: Strings are not equal 


3. Using the "compareTo" method: This method compares two strings lexicographically. Example: 

```
val str1 = "hello"
val str2 = "world"
val result = str1.compareTo(str2)
if (result == 0) {
  println("Strings are equal")
} else if (result < 0) {
  println("str1 is less than str2")
} else {
  println("str1 is greater than str2")
}
```

Output: str1 is less than str2 


4. Using the "equalsIgnoreCase" method: This method compares two strings ignoring the case of the characters. Example: 

```
val str1 = "Hello"
val str2 = "hello"
if (str1.equalsIgnoreCase(str2)) {
  println("Strings are equal")
} else {
  println("Strings are not equal")
}
```

Output: Strings are equal 

These are some of the common ways to compare strings in Scala.