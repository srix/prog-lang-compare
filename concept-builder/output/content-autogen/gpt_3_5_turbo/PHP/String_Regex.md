Regex (regular expressions) are a powerful tool used in PHP to match, search, and manipulate strings based on a pattern. Here are some examples of using regex in PHP:

1. Match a single character:
You can match a single character by specifying it in the pattern. For example, to match the character 'a', use the following code:
```
$string = 'apple';
$pattern = '/a/';
if (preg_match($pattern, $string)) {
    echo 'Match found.';
} else {
    echo 'Match not found.';
}
```

2. Match a set of characters:
You can match a set of characters by enclosing them in square brackets []. For example, to match any vowel, use the following code:
```
$string = 'apple';
$pattern = '/[aeiou]/';
if (preg_match($pattern, $string)) {
    echo 'Match found.';
} else {
    echo 'Match not found.';
}
```

3. Match a range of characters:
You can match a range of characters by separating them with a hyphen (-) inside square brackets []. For example, to match any letter between a and f, use the following code:
```
$string = 'apple';
$pattern = '/[a-f]/';
if (preg_match($pattern, $string)) {
    echo 'Match found.';
} else {
    echo 'Match not found.';
}
```

4. Match zero or more characters:
You can match zero or more characters by using the asterisk (*) symbol. For example, to match any word that starts with 'a', use the following code:
```
$string = 'apple';
$pattern = '/a.*/';
if (preg_match($pattern, $string)) {
    echo 'Match found.';
} else {
    echo 'Match not found.';
}
```

5. Match one or more characters:
You can match one or more characters by using the plus (+) symbol. For example, to match any word that contains at least one vowel, use the following code:
```
$string = 'apple';
$pattern = '/[aeiou]+/';
if (preg_match($pattern, $string)) {
    echo 'Match found.';
} else {
    echo 'Match not found.';
}
```

These are just a few examples of using regex in PHP. The possibilities are endless, and with some practice, you can use regex to solve many string manipulation problems.