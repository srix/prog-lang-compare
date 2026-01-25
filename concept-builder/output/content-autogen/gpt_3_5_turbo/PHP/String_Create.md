In PHP, a string is a sequence of characters that is used to represent text. Here are some examples of how to create a string in PHP:

1. Using single quotes: 

```
$string = 'Hello, World!';
```

2. Using double quotes: 

```
$string = "Hello, World!";
```

Double quotes are useful when you need to include variables or special characters in your string. Here's an example: 

```
$name = "John";
$string = "Hello, $name! How are you?";
```

3. Using the heredoc syntax:

```
$string = <<<EOT
This is a multi-line string
that can contain
variables and special characters.
EOT;
```

Heredoc syntax is useful when you need to create a string that spans multiple lines.

4. Using the nowdoc syntax:

```
$string = <<<'EOT'
This is a single-line string
that does not interpret variables or special characters.
EOT;
```

Nowdoc syntax is similar to heredoc syntax, but it does not interpret variables or special characters. 

Overall, there are multiple ways to create a string in PHP, and the choice depends on your specific needs.