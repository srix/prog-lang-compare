In Scala, primitive types are defined as value types. Value types are types that represent values, and their instances are usually represented as a sequence of bits and bytes. 

Scala has the following primitive types:

1. Byte: It is an 8-bit signed value. The range of values is from -128 to 127. For example, `val b:Byte = 10`

2. Short: It is a 16-bit signed value. The range of values is from -32768 to 32767. For example, `val s:Short = 1000`

3. Int: It is a 32-bit signed value. The range of values is from -2147483648 to 2147483647. For example, `val i:Int = 2000000`

4. Long: It is a 64-bit signed value. The range of values is from -9223372036854775808 to 9223372036854775807. For example, `val l:Long = 20000000000L`

5. Float: It is a 32-bit floating-point value. It offers 7 decimal digits of precision. For example, `val f:Float = 12.345f`

6. Double: It is a 64-bit floating-point value. It offers 16 decimal digits of precision. For example, `val d:Double = 123.456`

7. Char: It is a 16-bit unsigned Unicode character. For example, `val c:Char = 'a'`

8. Boolean: It is a Boolean value that can be either true or false. For example, `val b:Boolean = true`

In Scala, primitive types can be used in the same way as classes. They have constructors, methods and fields. For example, you can call methods on an integer value like this `1.toString()`, and can use operators like `+ - * / %` on integer values.