In Scala, a constant list is a collection that contains a fixed number of elements. Once a list is created, its elements cannot be added, deleted, or modified.

Here is an example of how to create a constant list in Scala:

```scala
val mylist = List("apple", "banana", "orange")
```

In this example, we have declared and initialized a constant list named `mylist` that contains the elements "apple", "banana", and "orange".

We can access elements of the list using their index position, like this:

```scala
println(mylist(0)) // prints "apple"
println(mylist(1)) // prints "banana"
println(mylist(2)) // prints "orange"
```

We can also use various methods provided by the List class to perform various operations on the list. Here are a few examples:

```scala
// adds two lists together to create a new list
val newList = mylist ++ List("grape", "kiwi")
println(newList) // prints List(apple, banana, orange, grape, kiwi)

// retrieves the length of the list
val length = mylist.length
println(length) // prints 3

// sorts the list in alphabetical order
val sortedList = mylist.sorted
println(sortedList) // prints List(apple, banana, orange)
```

Since a constant list is immutable, we cannot modify, add, or delete its elements directly. We can only create a new list by performing operations on it.