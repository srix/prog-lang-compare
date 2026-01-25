In PHP, a method or function can be declared using the `function` keyword followed by the function name and its parameters, if any. Here are some examples:

1. Simple function with no parameters:
```
function greet() {
    echo "Hello!";
}
```
This function simply echoes a greeting message when called.

2. Function with parameters:
```
function add($num1, $num2) {
    return $num1 + $num2;
}
```
This function takes two parameters, `num1` and `num2`, adds them together, and returns the result.

3. Method in a class:
```
class Person {
    public $name;

    public function sayHello() {
        echo "Hello, my name is " . $this->name;
    }
}
```
This is a method declaration in a class. It sets the `name` property of the class and defines the behavior of the `sayHello()` method, which echoes a personalized greeting.

In all cases, the function or method declaration must be followed by a set of parentheses, even if there are no parameters. These can then be called throughout your code and will execute their defined behavior when triggered.