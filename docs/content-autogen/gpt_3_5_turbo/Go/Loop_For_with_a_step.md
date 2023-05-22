In Go, the `for` loop is the most commonly used loop for iterating over arrays, slices, and maps. The `for` loop is used to iterate over a range of values and perform some operation for each value. Here is the basic syntax for the `for` loop with a step:

```
for i := 0; i < 10; i += 2 {
	fmt.Println(i)
}
```

This code will print every even number between 0 and 10 (inclusive). Here's a breakdown of the syntax:

- The first statement initializes the loop counter (`i`) to 0.
- The second statement is the loop condition: as long as `i` is less than 10, the loop will continue.
- The third statement is the step, which increments `i` by 2 after each iteration.
- The code inside the curly braces will be executed for each iteration.

Here are a few more examples of using `for` with a step in Go:

Print every other number between 0 and 20 (inclusive):

```
for i := 0; i <= 20; i += 2 {
	fmt.Println(i)
}
```

Print every third number between 1 and 30 (inclusive):

```
for i := 1; i <= 30; i += 3 {
	fmt.Println(i)
}
```

Print every fourth number between 10 and 50 (inclusive):

```
for i := 10; i <= 50; i += 4 {
	fmt.Println(i)
}
``` 

These are just a few examples of using `for` with a step in Go, but there are many other ways to use this versatile loop construct.