In Groovy, constant lists can be created using the "final" keyword. The "final" keyword is used to create a constant variable, which means that it can't be changed after it has been initialized. This is helpful in making sure that certain values aren't accidentally changed.

To create a constant list in Groovy, you can use the "final" keyword along with the "[] operator". Here's an example:

```
final List fruits = ['Apple', 'Orange', 'Banana']
```

In this example, we've created a constant list named "fruits" which contains three values: "Apple", "Orange", and "Banana". Once this list is initialized, it cannot be changed.

You can access the values in the list like any other list in Groovy. For example:

```
println(fruits[0]) // Output: Apple
println(fruits[1]) // Output: Orange
println(fruits[2]) // Output: Banana
```

You can also use some of the built-in methods available to lists in Groovy, such as "size()" or "contains()". Here's an example:

```
println(fruits.size()) // Output: 3
println(fruits.contains('Apple')) // Output: true
```

In summary, constant lists in Groovy are created using the "final" keyword and the "[] operator". Once a constant list is initialized, its values cannot be changed.