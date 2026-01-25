Sure, creating a string in Scala is simple and similar to other programming languages. Here are some examples:

1. Using double quotes:
```
val myString = "Hello, world!"
println(myString)
```
Output:
```
Hello, world!
```

2. Using triple quotes for multi-line strings:
```
val myString = """This is a multi-line
                  string example"""
println(myString)
```
Output:
```
This is a multi-line
                  string example
```

3. Using string interpolation:
```
val name = "John"
val myString = s"My name is $name"
println(myString)
```
Output:
```
My name is John
```

In Scala, the `String` type is an instance of the `java.lang.String` class. You can also use several methods to manipulate strings, such as `concat()`, `toUpperCase()`, `toLowerCase()`, `trim()`, `replace()`, `split()`, and many more.