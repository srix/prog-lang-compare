In Ruby, you can compare strings using the `==`, `!=`, `<`, `>`, `<=`, `>=`, and `<=>` operators. Here are some examples:

1. Using the `==` operator to check if two strings are equal:

```
"hello" == "Hello"   # false
"hello" == "hello"   # true
```

2. Using the `!=` operator to check if two strings are not equal:

```
"hello" != "Hello"   # true
"hello" != "hello"   # false
```

3. Using the `<` and `>` operators to compare the alphabetical order of two strings:

```
"abc" < "def"   # true
"abc" > "def"   # false
```

4. Using the `<=` and `>=` operators to compare the alphabetical order of two strings, including if they are equal:

```
"abc" <= "def"   # true
"abc" >= "def"   # false
"abc" <= "abc"   # true
"abc" >= "abc"   # true
```

5. Using the `<=>` operator to compare the alphabetical order of two strings. This operator returns 0 if the strings are equal, -1 if the first string is less than the second, and 1 if the first string is greater than the second:

```
"abc" <=> "def"   # -1
"def" <=> "abc"   # 1
"abc" <=> "abc"   # 0
```