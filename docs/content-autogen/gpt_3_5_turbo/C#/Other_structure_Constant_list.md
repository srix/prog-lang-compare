In C#, a constant list is a read-only collection of values that cannot be modified. Once a constant list is defined, its elements cannot be modified or added to or removed from the list. 

To define a constant list in C#, we can use the `readonly` keyword along with the `List<T>` class. Here's an example:

```
readonly List<int> myNumbers = new List<int> { 1, 2, 3, 4, 5 };
```

In the above example, we have defined a constant list `myNumbers` which contains five integer values. The `readonly` keyword ensures that the list cannot be modified later in the code. 

We can also define a constant list of string values in a similar way. Here's an example:

```
readonly List<string> myColors = new List<string> { "Red", "Green", "Blue", "Yellow" };
```

In this example, we have defined a constant list `myColors` containing four string values.

Once a constant list is defined, we can access its elements using the indexing operator. Here's an example that demonstrates this:

```
int thirdNumber = myNumbers[2]; // retrieves the third value (3) from the list
string secondColor = myColors[1]; // retrieves the second value ("Green") from the list
```

Overall, constant lists can be useful for when we need a read-only collection of values that will not change throughout the program.