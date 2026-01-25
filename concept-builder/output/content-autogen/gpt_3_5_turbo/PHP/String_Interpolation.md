Interpolation in PHP refers to the ability to embed variables directly into a string without the need for concatenation. This can be achieved using double quotes ("") or heredoc syntax. Here are some examples:

1. Using double quotes:

```
$name = "John";
$message = "Hello, $name!";
echo $message; // Output: Hello, John!
```

2. Using curly braces:

```
$age = 25;
$message = "I am {$age} years old.";
echo $message; // Output: I am 25 years old.
```

3. Using heredoc syntax:

```
$name = "Mary";
$message = <<<EOT
Hello, $name!
How are you doing today?
EOT; // EOT stands for End of Text
echo $message; // Output: Hello, Mary! \n How are you doing today?
```

Note: Single quotes ('') cannot be used for interpolation as they treat everything inside them as a string literal.