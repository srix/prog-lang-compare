Block binding is a Groovy feature that allows you to create variables that are only in scope within a particular code block. The syntax for using block binding in Groovy is to wrap the block of statements in curly braces, and then declare the variables using the `def` keyword.

Here is an example using block binding:

```
{
   def x = 10
   def y = 20
   println x + y
}
```

In this code block, we define two variables `x` and `y` and then print their sum. These variables are not accessible outside the block.

Another example using block binding with `if-else` statements:

```
if (true) {
   def name = 'Alice'
   println "Hello, $name"
}
else {
   def name = 'Bob'
   println "Hello, $name"
}
```

In this code block, we declare a variable `name` inside each branch of the `if-else` statement, which will only exist within that block. The output will be "Hello, Alice" since the condition is true.

Block binding can be a useful tool when you need to create temporary variables or isolate variables from the main code flow. However, overuse can make code difficult to read or debug.