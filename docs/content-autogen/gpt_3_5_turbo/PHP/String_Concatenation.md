In PHP, concatenation refers to combining two or more strings. This can be achieved using the string concatenation operator (.) or by using the compound concatenation operator (.=).

Here are some examples:

1. Using the string concatenation operator:
```
$firstName = "John";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName;

echo $fullName; // Output: John Doe
```
In this example, the two variables `$firstName` and `$lastName` are concatenated with a space in between using the string concatenation operator (.).

2. Using the compound concatenation operator:
```
$greeting = "Hello";
$name = "Jane";

$greeting .= " " . $name;

echo $greeting; // Output: Hello Jane
```
In this example, the string stored in the `$name` variable is appended to the string stored in the `$greeting` variable using the compound concatenation operator (.=).

Note that there are different ways to achieve string concatenation in PHP, but these are the most commonly used methods.