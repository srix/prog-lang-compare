In Groovy, strings can be concatenated using the `+` operator or the `concat()` method. Here are some examples:

1. Using the `+` operator:
```groovy
def str1 = "Hello"
def str2 = "world"
def result = str1 + " " + str2
println(result)   // Output: Hello world
```

2. Using the `concat()` method:
```groovy
def str1 = "Hello"
def str2 = "world"
def result = str1.concat(" ").concat(str2)
println(result)   // Output: Hello world
```

3. Using the interpolated string syntax:
```groovy
def str1 = "Hello"
def str2 = "world"
def result = "${str1} ${str2}"
println(result)   // Output: Hello world
```

Note that the interpolated string syntax is only available in Groovy 1.6 and later.