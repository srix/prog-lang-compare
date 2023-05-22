In TypeScript, for loop is used to iterate through a collection of elements like arrays, objects or strings. It allows us to execute a block of code repeatedly until the specified condition is true.

The syntax for using `for` loop in TypeScript is:

```
for(initialization; condition; increment/decrement) {
    // code to be executed
}
```

Let's understand the above syntax using an example to iterate through an array:

```
let arr: number[] = [10, 20, 30, 40, 50];

for(let i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
```

In the above example, we have initialized i as 0, condition as i<arr.length, and incrementing i by 1 in each iteration. The loop will run until i reaches the array length. 

The output of the above loop is:

```
10
20
30
40
50
```

Similarly, you can use `for` loop on other collection types like objects or strings and can perform the desired operations.