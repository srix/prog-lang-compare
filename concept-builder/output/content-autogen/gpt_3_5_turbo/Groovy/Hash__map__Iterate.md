In Groovy, you can iterate over a hash using an enhanced for-loop or a closure. Here are some examples:

1. Using an enhanced for-loop:
```
def myHash = [name: 'John', age: 30, city: 'New York']
for (entry in myHash.entrySet()) {
  println("${entry.key}: ${entry.value}")
}
```
Output:
```
name: John
age: 30
city: New York
```

2. Using a closure:
```
def myHash = [name: 'John', age: 30, city: 'New York']
myHash.each { key, value ->
  println("$key: $value")
}
```
Output:
```
name: John
age: 30
city: New York
```

3. Using a keySet():
```
def myHash = [name: 'John', age: 30, city: 'New York']
myHash.keySet().each { key ->
  println("$key: ${myHash[key]}")
}
```
Output:
```
name: John
age: 30
city: New York
```
In all these examples, we first create a hash with key-value pairs. In the first example, we use the `entrySet()` method to get all entries of the hash as a set, and then use the enhanced for-loop to iterate over each entry. In the second example, we use the `each` method to iterate over each key-value pair using a closure. In the third example, we use the `keySet()` method to get all keys of the hash as a set, and then use the `each` method to iterate over each key and get its corresponding value using square brackets.