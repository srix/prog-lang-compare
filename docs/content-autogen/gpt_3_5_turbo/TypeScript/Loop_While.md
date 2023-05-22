In TypeScript, while loop works similarly to the while loop in other programming languages like JavaScript. While loops are used when you want a particular block of code to execute repeatedly until a certain condition is met. Here is an example of how to use while in TypeScript:

```typescript
let count: number = 0;

while (count <= 10) {
  console.log(count);
  count++;
}
```

In this example, the while loop will execute repeatedly as long as the value of `count` is less than or equal to 10. Within the loop block, the value of `count` is printed to the console using `console.log()`, and then `count` is incremented by 1 using `count++`.

Another example of using while loop in TypeScript:

```typescript
let i: number = 1;
let sum: number = 0;

while (i <= 10) {
  sum += i;
  i++;
}

console.log("The sum of numbers from 1 to 10: " + sum);
```

In this example, we calculate the sum of numbers from 1 to 10 using a while loop. The loop iterates between the values of 1 and 10 and adds each number to the sum variable using the `+=` operator. Finally, the total sum is printed to the console.