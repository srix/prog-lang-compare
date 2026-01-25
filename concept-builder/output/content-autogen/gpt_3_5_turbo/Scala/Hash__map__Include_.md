In Scala, you can check if a hash (a.k.a. map) includes a key using the `contains` method. Here are some examples: 

Example 1: Check if a hash includes a key by specifying the key directly

```scala
val myHash = Map("apple" -> 2, "banana" -> 3, "orange" -> 5)

if (myHash.contains("banana")) {
  println("The hash includes the key 'banana'")
} else {
  println("The hash does not include the key 'banana'")
}
```

This will output: 
```
The hash includes the key 'banana'
```

Example 2: Check if a hash includes a key by using a variable

```scala
val myHash = Map("apple" -> 2, "banana" -> 3, "orange" -> 5)
val myKey = "grape"

if (myHash.contains(myKey)) {
  println(s"The hash includes the key '$myKey'")
} else {
  println(s"The hash does not include the key '$myKey'")
}
```

This will output: 
```
The hash does not include the key 'grape'
```

Note: You can also use the `get` method to retrieve the value for a key if it exists in the hash. If the key does not exist, `get` will return `None`. 

Example 3: Use `get` to retrieve the value for a key in a hash

```scala
val myHash = Map("apple" -> 2, "banana" -> 3, "orange" -> 5)
val myKey = "apple"

val myValue = myHash.get(myKey)

myValue match {
  case Some(value) => println(s"The value for key '$myKey' is $value")
  case None => println(s"The hash does not include the key '$myKey'")
}
```

This will output: 
```
The value for key 'apple' is 2
```