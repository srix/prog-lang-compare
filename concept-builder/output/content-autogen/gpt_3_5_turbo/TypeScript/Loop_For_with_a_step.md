In TypeScript, for loop can be used to iterate a block of code for a specific range. The `for` loop has three important statements - `initialization`, `condition` and `increment` section. 

Here's how you can use `for` loop with a step in TypeScript:

```typescript
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
// Output: 0 2 4 6 8
```

In the above example, `let i=0` initializes the loop control variable to 0, `i < 10` is the condition that checks whether the loop should continue or not, and `i += 2` increments i by 2. The loop will run for as long as `i < 10` condition is met, and the value of `i` is increased by 2 after each iteration.

You can also use variables or expressions that calculates the step size dynamically, for example:

```typescript
const n = 10;
const step = 2;

for (let i = 0; i < n; i += step) {
  console.log(i);
}
// Output: 0 2 4 6 8
```

In this example, the loop runs for 5 iterations, starting at 0 and incrementing by 2, until it reaches 8.

Hope this helps!