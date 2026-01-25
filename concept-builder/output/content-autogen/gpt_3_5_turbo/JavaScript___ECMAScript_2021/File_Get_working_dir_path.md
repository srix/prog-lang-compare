Getting the current working directory path in JavaScript / ECMAScript 2021 can be done using the `process.cwd()` method. It returns the current working directory of the Node.js process in which the script is running. Here's an example:

```js
const cwd = process.cwd();

console.log("Current working directory: ", cwd);
```

The above code will print the current working directory path to the console.

If you want to get the directory path of the current script file, you can use the `__dirname` global variable. It returns the directory name of the current module (in which the code is executed).

```js
const currentDir = __dirname;

console.log("Directory of current script file: ", currentDir);
```

The above code will print the directory path of the current script to the console.