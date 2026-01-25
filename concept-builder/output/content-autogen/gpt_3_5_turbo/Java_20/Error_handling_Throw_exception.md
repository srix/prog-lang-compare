In Java, you can throw an exception using the `throw` keyword. Here are some examples:

1. Example of throwing a built-in exception:

```java
public void divide(int num1, int num2) {
  if(num2 == 0) {
    throw new ArithmeticException("Cannot divide by zero");
  }
  int result = num1 / num2;
  System.out.println("Result: " + result);
}
```

In this example, if the `num2` parameter is passed in as 0, an `ArithmeticException` will be thrown with the message "Cannot divide by zero".

2. Example of throwing a custom exception:

```java
public void validateAge(int age) throws InvalidAgeException {
  if(age < 0 || age > 120) {
    throw new InvalidAgeException("Invalid age: " + age);
  }
  System.out.println("Valid age: " + age);
}
```

In this example, if the `age` parameter is less than 0 or greater than 120, a custom exception `InvalidAgeException` will be thrown with the message "Invalid age: {age}".

3. Example of catching a thrown exception:

```java
public void readFile(String path) {
  FileReader fr = null;
  try {
    fr = new FileReader(path);
  } catch (FileNotFoundException e) {
    // If the file is not found, throw a custom exception
    throw new FileException("File not found: " + path);
  } finally {
    try {
      if(fr != null) fr.close(); // close the FileReader
    } catch (IOException e) {
      e.printStackTrace();
    }
  }
}
```

In this example, if the file specified in the `path` parameter is not found, a custom exception `FileException` will be thrown. The exception can then be caught and handled by the calling method.