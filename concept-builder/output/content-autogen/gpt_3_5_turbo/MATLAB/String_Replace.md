To replace a substring within a string in MATLAB, you can use the `replace` function. The syntax is:

```
newStr = replace(str, oldSubstr, newSubstr)
```

Here, `str` is the original string, `oldSubstr` is the substring you want to replace, and `newSubstr` is the substring you want to replace it with. The function returns `newStr`, which is the updated string.

Here are some examples:

Example 1: Replace a single occurrence of a substring
```matlab
>> str = 'The quick brown fox jumps over the lazy dog';
>> newStr = replace(str, 'fox', 'cat')
newStr =
    'The quick brown cat jumps over the lazy dog'
```
In this example, we are replacing the first occurrence of the substring 'fox' with 'cat'.

Example 2: Replace all occurrences of a substring
```matlab
>> str = 'abracadabra';
>> newStr = replace(str, 'a', 'e')
newStr =
    'ebrecedebre'
```
In this example, we are replacing all occurrences of the substring 'a' with 'e'.

Example 3: Replace a substring with multiple characters
```matlab
>> str = 'The quick brown dog jumps over the lazy dog';
>> newStr = replace(str, 'dog', 'cat and mouse')
newStr =
    'The quick brown cat and mouse jumps over the lazy cat and mouse'
```
In this example, we are replacing all occurrences of the substring 'dog' with the phrase 'cat and mouse', which contains more than one character.