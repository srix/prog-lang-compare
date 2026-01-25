In Java, `while` is a looping construct used to repeatedly execute a block of code as long as a certain condition is true. Here's the basic syntax:

```
while (condition) {
    // code to be executed repeatedly
}
```

Here are some examples of using `while` in Java:

1. Printing numbers from 1 to 10:

```
int counter = 1;
while (counter <= 10) {
    System.out.println(counter);
    counter++;
}
```

2. Calculating the sum of numbers from 1 to 100:

```
int num = 1, sum = 0;
while (num <= 100) {
    sum += num;
    num++;
}
System.out.println("Sum of numbers from 1 to 100 = " + sum);
```

3. Reading input from the user until a certain condition is met:

```
Scanner scanner = new Scanner(System.in);
int input = -1;
while (input != 0) {
    System.out.print("Enter a number (0 to exit): ");
    input = scanner.nextInt();
    System.out.println("You entered " + input);
}
```

These are just a few examples of how `while` can be used in Java. It is a very powerful tool for repeating code as long as a certain condition is true.