Interpolating strings in Scala means embedding expressions or variables within a string. Scala provides three types of string interpolations:

1. s-interpolation: 

This type of interpolation allows you to embed expressions within a string by preceding it with the letter s. The expressions should be surrounded by curly braces.

Example:

```scala
val name = "John"
val age = 30
val message = s"My name is $name and I am $age years old"
println(message)
```

Output:

```
My name is John and I am 30 years old
```

2. f-interpolation:

This type of interpolation allows you to format the string by using printf-like formatting. It can be achieved by preceding the string with the letter f. The expressions should be surrounded by curly braces.

Example:

```scala
val height = 1.80
printf(f"My height is $height%.2f meters")
```

Output:

```
My height is 1.80 meters
```

3. raw-interpolation:

This type of interpolation is similar to s-interpolation, but it ignores escape characters like \n and \t.

Example:

```scala
val message = raw"This is a \n new line"
println(message)
```

Output:

```
This is a \n new line
```

I hope this explanation helps!