In Groovy, block passing can be used to pass a block of code to a method. This allows for more concise and readable code. 

To use block passing, we can enclose the block of code in curly braces and pass it as a parameter to a method. The method should then invoke the block of code using the `call()` method. 

Here is an example of using block passing in Groovy:

```groovy
// Define a method that takes a block of code as a parameter
def hello(name, codeBlock) {
  println "Hello, ${name}! Before block"
  codeBlock.call() // Invoke the block of code
  println "Hello, ${name}! After block"
}

// Call the hello function and pass a block of code to it
hello("John") {
  println "This is the block of code"
}
```

Output:
```
Hello, John! Before block
This is the block of code
Hello, John! After block
```

In the example above, we defined a method called `hello` that takes a parameter called `codeBlock`, which is a block of code enclosed in curly braces. We then use the `call()` method to invoke the block of code when the method is called.

When calling the function, we pass a string parameter for the name and a block of code that prints a message. The block of code is executed between the "Before block" and "After block" messages.

Block passing can be particularly useful when working with collections. For example, we can use block passing with the `collect` method to transform a collection:

```groovy
def numbers = [1, 2, 3, 4, 5]

def doubled = numbers.collect { it * 2 }

println doubled // [2, 4, 6, 8, 10]
```

In this example, we define a list of numbers and then use the `collect` method to transform the list by doubling each value. We pass a block of code that multiplies each value by 2 as a parameter to the `collect` method. The resulting list is stored in the `doubled` variable and then printed.