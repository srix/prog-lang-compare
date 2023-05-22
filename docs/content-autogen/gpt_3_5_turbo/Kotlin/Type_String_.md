In Kotlin, we can use the `toDoubleOrNull()` function to check if a string is a number or not. This function returns a Double if the string is a valid number or null if it is not. Here's an example:

```
fun main() {
   val str1 = "123"
   val str2 = "12.3"
   val str3 = "abc"

   val num1 = str1.toDoubleOrNull()
   val num2 = str2.toDoubleOrNull()
   val num3 = str3.toDoubleOrNull()

   if (num1 != null) {
      println("$str1 is a number")
   } else {
      println("$str1 is not a number")
   }

   if (num2 != null) {
      println("$str2 is a number")
   } else {
      println("$str2 is not a number")
   }

   if (num3 != null) {
      println("$str3 is a number")
   } else {
      println("$str3 is not a number")
   }
}
```

Output:
```
123 is a number
12.3 is a number
abc is not a number
``` 

In this example, we have three strings `str1`, `str2`, and `str3`. `str1` and `str2` are valid numbers while `str3` is not. We use the `toDoubleOrNull()` function to convert each string to a Double. If the conversion is successful and the resulting Double is not null, we print that the string is a number. Otherwise, we print that the string is not a number.