In Java, "block passing" refers to passing a block of code as a parameter to a method. This is achieved using lambda expressions or anonymous inner classes.

Here's an example of passing a block of code as a parameter using a lambda expression:

```
public static void repeat(int n, Runnable action) {
    for (int i = 0; i < n; i++) {
        action.run();
    }
}

public static void main(String[] args) {
    int count = 5;
    repeat(count, () -> {
        System.out.println("Hello, world!");
    });
}
```

In this example, the `repeat` method takes an integer `n` and a `Runnable` object as parameters. Inside the method, the `Runnable`'s `run` method is invoked `n` times using a for loop. In the `main` method, we create a lambda expression that contains the block of code we want to pass to `repeat` - in this case, a simple `println` statement.

Here's an example of passing a block of code as a parameter using an anonymous inner class:

```
public static void processFile(File file, FileProcessor processor) throws IOException {
    try (BufferedReader br = new BufferedReader(new FileReader(file))) {
        String line;
        while ((line = br.readLine()) != null) {
            processor.process(line);
        }
    }
}

public static void main(String[] args) throws IOException {
    File file = new File("myFile.txt");
    processFile(file, new FileProcessor() {
        @Override
        public void process(String line) {
            System.out.println(line.toUpperCase());
        }
    });
}

interface FileProcessor {
    void process(String line);
}
```

In this example, the `processFile` method takes a `File` and a `FileProcessor` object as parameters. Inside the method, the `process` method of the `FileProcessor` is invoked for each line in the file.

In the `main` method, we create an anonymous inner class that implements the `FileProcessor` interface and defines the block of code we want to pass to `processFile` - in this case, converting each line to uppercase and printing it out. We pass this anonymous inner class object to `processFile` as a parameter.