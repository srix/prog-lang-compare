In Dart programming language, a string is a sequence of characters enclosed in single or double quotes. To create a string, you can use either single quotes or double quotes. Here are some examples:

1. Using single quotes:
```
String name = 'John';
```

2. Using double quotes:
```
String message = "Hello, World!";
```

3. Using triple quotes for multi-line strings:
```
String poem = '''
I tried to love you
I tried to care
But now I realize
You were never there.
''';
```

4. Using string interpolation to concatenate variables and strings:
```
String firstName = 'John';
String lastName = 'Doe';
String fullName = 'My name is $firstName $lastName';
```

In the above example, the dollar sign followed by curly braces is used to insert the value of a variable into a string. The resulting value of the fullName variable would be 'My name is John Doe'.