In TypeScript, we can use the `until` keyword to execute a block of code repeatedly until a specific condition is met. The syntax is similar to the `while` loop, but with an inverted condition. The basic structure is as follows:

```
until (condition) {
  // code to be executed repeatedly
}
```

The `condition` is evaluated before each iteration of the loop. If the `condition` is true, the loop continues; otherwise, the loop exits.

Here are some examples to illustrate how to use `until` in TypeScript:

Example 1: Print numbers from 1 to 10 using `until`

```
let i = 1;
until (i > 10) {
  console.log(i);
  i++;
}
```

Output:
```
1
2
3
4
5
6
7
8
9
10
```

Example 2: Generate a random number between 1 and 100 using `until`

```
let randomNumber = 0;
until (randomNumber > 0 && randomNumber <= 100) {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
console.log(randomNumber);
```

Output:
```
[random number between 1 and 100]
```

In this example, the `until` loop keeps generating random numbers until it generates a number between 1 and 100.

It is worth noting that `until` is not a built-in keyword in TypeScript, but rather a logical extension of the language based on a third-party library. Therefore, when using `until`, it is important to make sure that the library is properly installed and configured in the project.