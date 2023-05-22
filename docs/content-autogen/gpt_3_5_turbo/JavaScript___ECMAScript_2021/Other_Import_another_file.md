In JavaScript, you can import other files using the `import` statement. This allows you to use code defined in other files without having to rewrite it in your current file. Here is an example:

Module File (example.js):

```javascript
export const message = "Hello, world!";
```

Main File:

```javascript
import { message } from './example.js';

console.log(message);  // Output: "Hello, world!"
```

In the above example, we create a module in the `example.js` file that exports a constant called `message`. In the main file, we use the `import` statement to import the `message` constant from the `example.js` file. We can then use the `message` constant in the main file.

You can also create a default export in the module file that can be imported without specifying a name. Here is an example:

Module File:

```javascript
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

Main File:

```javascript
import sayHello from './example.js';

sayHello('Jane');  // Output: "Hello, Jane!"
```

In the above example, we create a default export in the `example.js` file by exporting a function. In the main file, we use `import` to import the function as `sayHello`. We can then call the `sayHello` function with a name argument to print a greeting to the console.