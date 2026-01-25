To get the directory path in JavaScript – ECMAScript 2021, you can use the `import.meta.url` property which provides the URL of the current module. By using the Node.js built-in `path` module, you can get the directory path.

Here is an example code for getting the directory path in JavaScript – ECMAScript 2021:

```js
import path from "path";

// Get the directory path
const dirPath = path.dirname(new URL(import.meta.url).pathname);

console.log(dirPath); // Prints the directory path of the current module
```

In the above example, the `path.dirname()` function from the `path` module is used to extract the directory path from the URL obtained from `import.meta.url`. Finally, the directory path is logged to the console using the `console.log()` method.