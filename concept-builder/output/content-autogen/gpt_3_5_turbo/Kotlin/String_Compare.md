In Kotlin, we can compare strings in several ways. Here are some examples:

1. Using the == operator: 

   We can use the == operator to compare two strings. This operator compares the content of the strings.

   ```
   val str1 = "Hello"
   val str2 = "World"

   if (str1 == str2) {
       println("Strings are equal")
   } else {
       println("Strings are not equal")
   }
   ```

2. Using the equals() function:

   We can also use the equals() function to compare strings.

   ```
   val str1 = "Hello"
   val str2 = "hello"

   if (str1.equals(str2, ignoreCase = true)) {
       println("Strings are equal")
   } else {
       println("Strings are not equal")
   }
   ```

   Note: In the above example, we are making the comparison case-insensitive by setting the ignoreCase parameter to true.

3. Using compareTo() function: 

   We can also use the compareTo() function to compare two strings. This function compares two strings lexicographically.

   ```
   val str1 = "Hello"
   val str2 = "hello"

   val result = str1.compareTo(str2, ignoreCase = false)

   if (result == 0) {
       println("Strings are equal")
   } else if (result < 0) {
       println("$str1 is less than $str2")
   } else {
       println("$str1 is greater than $str2")
   }
   ```

   Note: In the above example, we are making the comparison case-sensitive by setting the ignoreCase parameter to false. 

These are some of the ways to compare strings in Kotlin.