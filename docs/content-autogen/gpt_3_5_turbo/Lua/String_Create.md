In Lua, a string is a sequence of characters, delimited by quotes. There are three types of quotes that can be used:

1. Double quotes (""): 
Double quotes are used to created string literals.

Example:
```
message = "Hello, Lua!"
```

2. Single quotes (''): 
Single quotes can also be used to create string literals.

Example:
```
message = 'Hello, Lua!'
```

3. Long brackets ( [[]] ):
Long brackets can be used to create multi-line strings and also avoid the need to escape quotes, since any character can be used as a delimiter.

Example:
```
message = [[
Hello,
Welcome to Lua!]]
```

Note that in Lua, strings are also objects, which means they have methods that can be called on them. Here's an example:

```
message = "Hello, Lua!"
print(message:upper()) -- Output: HELLO, LUA!
```

In the example above, the `upper()` method is called on the `message` string object to convert the text to uppercase.