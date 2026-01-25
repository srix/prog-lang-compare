In JavaScript, you can use the `import.meta.url` property to get the file path of the currently executing module. This property is available in ECMAScript 2021 and is commonly used in Node.js applications. Here is an example:

Say, we have a file named `example.js` located in `/home/user/documents/` directory and the content of the file is as follows:

```js
console.log(import.meta.url); // logs 'file:///home/user/documents/example.js'
```

Here, the `import.meta.url` property returns the file path of `example.js`.

We can also use the `URL` constructor to get a more structured file path. Here’s an example:

```js
const filePath = new URL(import.meta.url).pathname;
console.log(filePath); // logs '/home/user/documents/example.js'
``` 

The `URL` constructor takes the `import.meta.url` value and generates a `URL` object. The `pathname` property of the `URL` object can then be accessed to get the file path.