To replace a substring within a string in Julia, you can use the built-in `replace()` function. 

Here is an example:

```
string_to_replace = "I love pizza and pasta"
new_substring = "sushi"
old_substring = "pizza"

new_string = replace(string_to_replace, old_substring, new_substring)

println(new_string)
```

In this example, we have a string called `string_to_replace` that contains the phrase "I love pizza and pasta". We want to replace the word "pizza" with the word "sushi". 

We use the `replace()` function by passing in our original string, the substring we want to replace, and the new substring we want to replace it with. 

The output of this code snippet would be:

```
"I love sushi and pasta"
```

As you can see, the original string has been modified to replace "pizza" with "sushi". 

You can also use the `replace()` function to replace multiple occurrences of a substring within a string by passing in a count parameter as the fourth argument. For example:

```
string_to_replace = "I love pizza and pizza and pasta"
new_substring = "sushi"
old_substring = "pizza"

new_string = replace(string_to_replace, old_substring, new_substring, 2)

println(new_string)
```

In this modified example, we've added a count parameter of 2 to the `replace()` function. This tells the function to only replace the first two occurrences of the old substring with the new substring. 

The output of this code snippet would be:

```
"I love sushi and sushi and pasta"
```

As you can see, only the first two occurrences of "pizza" have been replaced with "sushi".