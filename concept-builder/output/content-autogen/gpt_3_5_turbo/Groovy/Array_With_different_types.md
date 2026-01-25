In Groovy, you can create an array with different types by simply declaring the array with the desired types in square brackets separated by commas. Here's an example:

```
def myArray = ['string', 123, true, 3.14]
```

In the above example, the `myArray` variable is an array containing four elements of different types - a String, an Integer, a Boolean, and a Decimal.

You can also specify the types explicitly using the `as` keyword, like this:

```
def myArray = ['string' as String, 123 as Integer, true as Boolean, 3.14 as Double]
```

In this example, each element is explicitly cast to its respective type using the `as` keyword.

Another way to create an array with different types is to use a `List`, and then convert it to an array using the `toArray()` method. Here's an example:

```
def myList = ['string', 123, true, 3.14]
def myArray = myList.toArray()
```

In this example, `myList` is a `List` containing four elements of different types. The `toArray()` method is called on the list to convert it to an array, which is stored in the `myArray` variable.

Keep in mind that mixing different types in an array can make your code less readable and harder to maintain. So it's best to use this approach judiciously when necessary.