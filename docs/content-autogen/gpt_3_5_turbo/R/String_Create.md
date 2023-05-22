To create a string in R, you can use quotes around the text that you want to include in the string.

There are two types of quotes you can use in R:

1. Single quotes (`' '`) - used to define a string with no interpolation
2. Double quotes (`" "`) - used to define a string with interpolation

Here are some examples:

```
# Defining a string with single quotes
my_string1 <- 'This is a string'

# Defining a string with double quotes
my_string2 <- "This is another string"

# Defining a string with interpolation
age <- 27
my_string3 <- paste("I am", age, "years old")
```

In the above example, `my_string1` and `my_string2` are defined by simply enclosing a text string in single or double quotes, respectively. 

In `my_string3`, I used the `paste()` function to interpolate a variable `age` into the string. The `paste()` function concatenates the string "I am" with the value of the `age` variable and the string "years old" to create a new string.

Note that you can also use the `sprintf()` function to format strings with variables. Here's an example:

```
# Defining a string using sprintf
my_string4 <- sprintf("My name is %s and my age is %d", "John", 35)
```
In this example, the `%s` and `%d` are placeholders for a string and a number, respectively. The `sprintf()` function replaces the placeholders with the values passed as arguments. The resulting string is: "My name is John and my age is 35".