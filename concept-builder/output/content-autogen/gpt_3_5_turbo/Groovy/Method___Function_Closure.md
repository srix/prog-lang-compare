In Groovy, a closure is a block of code that can be assigned to a variable or passed as an argument to a method. A closure can access variables in its enclosing scope and can be executed at any time, even after the scope in which it was defined has been exited.

Here's an example of a basic closure in Groovy:

```
def sayHello = {
  println("Hello, world!")
}

sayHello()
```

In this example, we define a closure called `sayHello` that simply prints "Hello, world!" to the console when executed. We then call the closure by invoking `sayHello()`.

Closures can also take arguments and return values. Here's an example of a closure that takes an argument:

```
def addOne = { num ->
  num + 1
}

println(addOne(5))
```

In this example, we define a closure called `addOne` that takes an argument `num` and returns `num + 1`. We then call the closure with the argument `5` and print the result to the console, which is `6`.

Closures can also access variables in their enclosing scope, as mentioned earlier. Here's an example:

```
def makeCounter = {
  int count = 0
  { count++ }
}

def counter = makeCounter()
println(counter())
println(counter())
```

In this example, we define a closure called `makeCounter` that returns another closure that increments a variable `count` each time it is called. We assign the returned closure to a variable called `counter`, and then call it twice using `counter()` and print the result to the console. Each time the closure is called, it increments the `count` variable and returns its new value.

These are just a few examples of how to use closures in Groovy. They are incredibly powerful and can be used in many different ways to make your code more flexible and concise.