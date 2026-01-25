`for` is a loop in Java that executes a block of code repeatedly based on certain conditions. Here are some examples of using `for` in Java:

1. Basic usage of `for` loop:
```
for(int i=1; i<=10; i++) {
    System.out.println(i);
}
```
This code will print the numbers 1 to 10, one per line.

2. Summing numbers using `for` loop:
```
int sum = 0;
for(int i=1; i<=10; i++) {
    sum += i;
}
System.out.println("Sum of numbers from 1 to 10 is " + sum);
```
This code will sum up the numbers from 1 to 10 and print the result.

3. Iterating through an array using `for` loop:
```
int[] numbers = {1, 2, 3, 4, 5};
for(int i=0; i<numbers.length; i++) {
    System.out.println(numbers[i]);
}
```
This code will print each number in the `numbers` array, one per line.

4. Nested `for` loop:
```
for(int i=1; i<=5; i++) {
    for(int j=1; j<=10; j++) {
        System.out.print(i*j + " ");
    }
    System.out.println();
}
```
This code will print the multiplication tables for numbers 1 to 5, one table per line.

5. Using `continue` statement in `for` loop:
```
for(int i=1; i<=10; i++) {
    if(i%2 == 0) {
        continue;
    }
    System.out.println(i);
}
```
This code will print only the odd numbers from 1 to 10, skipping the even numbers.