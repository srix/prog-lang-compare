To split a string in java, you can use the `split()` method from the `String` class. 

Here's the syntax for the `split()` method:

```
str.split(regex)
```

Here, `str` is the string you want to split and `regex` is the regular expression that defines the separator(s) for splitting the string. 

For example, to split a string by a space character, you can use the following code:

```
String str = "Hello world!";
String[] words = str.split(" ");
System.out.println(Arrays.toString(words));
```

Output: `[Hello, world!]`

In this code, we first define the string `str` which we want to split. We then call the `split()` method on it and pass a space character as the `regex` argument. This splits the string into an array of words and assigns it to the `words` array. Finally, we print the contents of the `words` array using the `Arrays.toString()` method.

You can also split a string by a comma character (or any other character) using the same `split()` method. 

Here's an example:

```
String str = "apple,banana,orange";
String[] fruits = str.split(",");
System.out.println(Arrays.toString(fruits));
```

Output: `[apple, banana, orange]`

In this code, we define the string `str` which contains a comma-separated list of fruits. We then call the `split()` method on it and pass a comma character as the `regex` argument. This splits the string into an array of fruits and assigns it to the `fruits` array. Finally, we print the contents of the `fruits` array using the `Arrays.toString()` method.