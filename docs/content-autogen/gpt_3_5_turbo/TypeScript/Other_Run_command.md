To run a TypeScript file, you need to first install TypeScript on your machine using the Node Package Manager (`npm`). You can do this by running the following command:

`npm install -g typescript`

Once TypeScript is installed, you can create a TypeScript file (`file.ts`) and run it with the following steps:

1. Create a TypeScript file: `file.ts`
```typescript
console.log("Hello, TypeScript!");
```

2. Open a terminal and navigate to the directory containing the `file.ts` file.
3. Compile the TypeScript file using the following command: `tsc file.ts`
4. This will transpile the TypeScript code into JavaScript code and generate a `file.js` file in the same directory.
5. Run the transpiled JavaScript file using the following command: `node file.js`
6. You should see the output `Hello, TypeScript!` in the terminal.

Here's another example assuming the TypeScript file is having a function:

1. Create a TypeScript file `math.ts`
```typescript
function add(number1: number, number2: number): number {
  return number1 + number2;
}
console.log(add(5, 10));
```

2. Open a terminal and navigate to the directory containing the `math.ts` file.
3. Compile the TypeScript file using the following command: `tsc math.ts`
4. This will transpile the TypeScript code into JavaScript code and generate a `math.js` file in the same directory.
6. Run the transpiled JavaScript file using the following command: `node math.js`
7. You should see the output `15` in the terminal.