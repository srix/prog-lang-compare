Regular expressions (regex) in Perl are used to search for and manipulate patterns in text. They are powerful tools that allow you to match and replace text based on a set of rules.

Here are some examples of how to use regex in Perl:

1. Matching a string

To match a string in Perl using regex, you can use the `=~` operator:

```
my $string = "hello world";
if ($string =~ /world/) {
  print "Match found!\n";
}
```

In this example, the regex `/world/` is used to match the string "world" in the variable `$string`.

2. Matching a specific character

You can use the square bracket notation to match a specific character:

```
my $string = "hello world";
if ($string =~ /[aeiou]/) {
  print "Match found!\n";
}
```

In this example, the regex `[aeiou]` is used to match any vowel character in `$string`.

3. Matching a range of characters

You can use the hyphen notation to match a range of characters:

```
my $string = "I like apples and oranges";
if ($string =~ /[a-m]/) {
  print "Match found!\n";
}
```

In this example, the regex `[a-m]` is used to match any lowercase letter from "a" to "m".

4. Matching any character

To match any character, you can use the period notation:

```
my $string = "hello world";
if ($string =~ /w.rld/) {
  print "Match found!\n";
}
```

In this example, the regex `w.rld` is used to match any character between "w" and "r" in `$string`.

5. Grouping and capturing

You can use parentheses to group and capture parts of a match:

```
my $string = "The quick brown fox";
if ($string =~ /The (quick \w+) fox/) {
  print "Match found: $1\n";
}
```

In this example, the regex `The (quick \w+) fox` is used to match the entire string "The quick brown fox" and capture the word "quick" as a group. `$1` is used to reference the captured group.