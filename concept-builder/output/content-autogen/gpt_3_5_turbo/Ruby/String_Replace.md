In Ruby, you can replace a substring with the `gsub` (global substitution) method. The syntax for using `gsub` is: 

```ruby 
string.gsub("substring_to_replace", "replacement_substring")
```

Here's an example:

```ruby
sentence = "The quick brown fox jumps over the lazy dog."
new_sentence = sentence.gsub("lazy", "sleeping")
puts new_sentence
```

This code will output:

```
The quick brown fox jumps over the sleeping dog.
```

In this example, we used the `gsub` method to replace the substring `"lazy"` with `"sleeping"`. The method returns a new string with the substitution made. 

You can also use regular expression (regex) patterns to replace multiple occurrences of a substring. For example:

```ruby
string = "Ruby is the best programming language. Python is great too!"
new_string = string.gsub(/\b(Ruby|Python)\b/, "<code>\\1</code>")
puts new_string
```

This code will output:

```
<code>Ruby</code> is the best programming language. <code>Python</code> is great too!
```

In this example, we used a regex pattern to match the substrings `"Ruby"` and `"Python"`, and used the backslash followed by a number to insert the matched substring within the replacement string. We also used the `\b` regex character to match word boundaries and ensure we only replace whole words.