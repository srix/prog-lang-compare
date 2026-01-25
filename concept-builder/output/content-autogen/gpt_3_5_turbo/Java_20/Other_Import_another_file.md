In order to import another file in Java, you can use the `import` statement. This allows you to use classes and other constructs from the specified package or file in your own code.

Here's an example of how to import a class from another file in Java:

Assume, we have a file called `MyClass.java` which contains the following code:

```
package com.example;

public class MyClass {
    public void printMessage() {
        System.out.println("Hello World!");
    }
}
```

We can import this class into another file called `Main.java` which is located in the same package like this:

```
package com.example;

import com.example.MyClass;

public class Main {
    public static void main(String[] args) {
        MyClass myObj = new MyClass();
        myObj.printMessage();
    }
}
```

In this example, we first specify the package that `MyClass` belongs to using the `import` statement. Then, in the `main` method of `Main.java`, we create an instance of `MyClass` and call the `printMessage` method to output "Hello World!" to the console.

Note: If the file you want to import is not in the same package as the file you are importing it into, you will need to use the full package name when importing.