In Groovy, the size of a hash can be found using the `size()` method. Here's an example:

```groovy
def map = [name: 'John', age: 30, city: 'New York']
println "Size of map: ${map.size()}"
```

Output:

```
Size of map: 3
```

In the above code, we first define a `map` hash with three key-value pairs. We then call the `size()` method on the `map` variable to get the size of the hash, which is `3`. 

Similarly, if you want to get the size of an empty hash, you can use the `size()` method without any argument as shown in the following example:

```groovy
def emptyMap = [:]
println "Size of empty map: ${emptyMap.size()}"
```

Output:

```
Size of empty map: 0
```

In this case, since the `emptyMap` hash is empty, its size is `0`.