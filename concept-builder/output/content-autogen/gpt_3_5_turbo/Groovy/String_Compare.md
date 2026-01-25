In Groovy, we can compare strings using the following operators:

1. `==` operator: This operator tests for equality of two strings.

   Example: 
   ```
   def str1 = "Groovy"
   def str2 = "groovy"
   def str3 = "Groovy"
   
   if(str1 == str2){
       println "str1 and str2 are equal"
   } else {
       println "str1 and str2 are not equal"
   }
   
   if(str1 == str3){
       println "str1 and str3 are equal"
   } else {
       println "str1 and str3 are not equal"
   }
   ```
   Output:
   ```
   str1 and str2 are not equal
   str1 and str3 are equal
   ```

2. `<=>` operator: This operator compares strings lexicographically.

   Example:
   ```
   def str1 = "apple"
   def str2 = "banana"
   def str3 = "cherry"
   
   println str1 <=> str2
   println str2 <=> str3
   println str3 <=> str1
   ```
   Output:
   ```
   -1
   -1
   1
   ```
   Here `-1` means that the left string is less than the right string, `0` means they are equal, and `1` means the left string is greater than the right string.

3. `equals()` method: This method tests for equality of two strings.

   Example:
   ```
   def str1 = "foo"
   def str2 = "bar"
   
   if(str1.equals(str2)){
       println "str1 and str2 are equal"
   } else {
       println "str1 and str2 are not equal"
   }
   
   def str3 = "foo"
   
   if(str1.equals(str3)){
       println "str1 and str3 are equal"
   } else {
       println "str1 and str3 are not equal"
   }
   ```
   Output:
   ```
   str1 and str2 are not equal
   str1 and str3 are equal
   ```