In TypeScript, reading a file is done using the `fs` module which is built into node.js. Here is an example of how to read a file in TypeScript:

```typescript
import * as fs from 'fs';

// Read file asynchronously
fs.readFile('filename.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Read file synchronously
const data = fs.readFileSync('filename.txt', 'utf8');
console.log(data);
```

In the first example, we are using the `readFile` method which reads the file asynchronously. The first argument is the filename, the second argument is the encoding (in this case "utf8"), and the third argument is a callback function that is executed once the file has been read. If there is an error, we throw an exception, otherwise we log the contents of the file to the console.

In the second example, we are using the `readFileSync` method which reads the file synchronously. The first argument is the filename and the second argument is the encoding (in this case "utf8"). The contents of the file are stored in the `data` variable which is then logged to the console. 

Note that when using the synchronous method, the program will block until the file has been read completely. This may not be suitable for large files or situations where performance is critical. In those cases, the asynchronous method should be used.