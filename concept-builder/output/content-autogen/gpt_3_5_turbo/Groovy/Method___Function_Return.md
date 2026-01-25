In Groovy, you can return a value from a method or function using the 'return' keyword. Here is an example of a method that returns a string:

```
def hello(name) {
   return "Hello, ${name}!"
}
```

In this example, the 'hello' method takes a parameter 'name' and returns a string that says "Hello, {name}!". To call this method and get the returned value, you would do the following:

```
def greeting = hello("John")
println greeting // Output: Hello, John!
```

In this example, we are calling the 'hello' method with the argument 'John' and storing the returned value in a variable called 'greeting'. We then print the value of 'greeting', which will output "Hello, John!" to the console.

Another example that returns an integer:

```
def sum(a, b) {
   return a + b
}
```

In this example, the 'sum' method takes two parameters 'a' and 'b', adds them together, and returns the result. To call this method and get the returned value, you would do the following:

```
def result = sum(2, 3)
println result // Output: 5
```

In this example, we are calling the 'sum' method with the arguments 2 and 3 and storing the returned value in a variable called 'result'. We then print the value of 'result', which will output "5" to the console.