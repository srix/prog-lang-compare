In Scala, block passing is a concept that allows passing a block of code as a parameter to a method or function. The passed block of code is then executed by the receiver of the block. Block passing is supported in Scala through a syntax called "by-name parameters".

Suppose we have a method that takes an integer and a block of code as parameters. The method adds two to the integer and then executes the passed block of code by passing the result as a parameter to it. Here's how the method would look like:

```scala
def executeWithResult(num: Int)(block: Int => Unit): Unit = {
  val result = num + 2
  block(result)
}
```

In the above code, the method takes an integer `num` and a block of code `block` as parameters. The `block` parameter is of type `Int => Unit`, which means it's a function that takes an `Int` as a parameter and returns nothing (`Unit`).

Now we can call the `executeWithResult` method and pass it an integer and a block of code. The block of code is passed using a special syntax that looks like `{ ... }`. Here's an example:

```scala
executeWithResult(3) { result =>
  println(s"The result is: $result")
}
```

In the above code, we're calling the `executeWithResult` method and passing it the integer `3` and a block of code that prints the result passed to it. The block of code is enclosed in curly braces and is passed directly after the method call without parentheses.

When the `executeWithResult` method is executed, it adds two to the passed integer (`3 + 2 = 5`) and then executes the passed block of code by passing the result (`5`) as a parameter to it. The block of code then prints the result, resulting in the following output:

```
The result is: 5
```

In summary, block passing allows passing a block of code as a parameter to a method or function in Scala through the use of by-name parameters. The passed block of code can be executed by the method or function as needed.