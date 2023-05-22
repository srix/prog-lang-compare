In Groovy, there are different ways you can check if a string is a number. Here are three possible examples:

1. Using isNumber() method: Groovy provides an isNumber() method for Strings which can be used to check if a given string is a number or not. It returns a boolean value.

```
def str1 = "123"
def str2 = "abc"

assert str1.isNumber() == true
assert str2.isNumber() == false
```

2. Using isDouble() method: If you want to specifically check if the string is a double value, then you can use the isDouble() method instead of isNumber(). It also returns a boolean value.

```
def str1 = "123.45"
def str2 = "abc"

assert str1.isDouble() == true
assert str2.isDouble() == false
```

3. Using a regular expression: Another way to check if a string is a number is to use a regular expression to match the numeric pattern. You can use the matches() method to achieve this.

```
def str1 = "123"
def str2 = "123.45"
def str3 = "abc"
def numberPattern = /^\d+$/

assert str1.matches(numberPattern) == true
assert str2.matches(numberPattern) == false
assert str3.matches(numberPattern) == false
```

In all these cases, the output will be a boolean value depending on whether the string is a number or not.