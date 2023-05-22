To write a file in TypeScript, you can use the `fs` module from Node.js. The `fs` module provides methods for interacting with the file system.

Here is an example of how to write a file in TypeScript:

```typescript
import fs from 'fs';

const data = 'This is some data to write to a file.';

fs.writeFile('output.txt', data, (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
```

In this example, we are using the `writeFile` method from the `fs` module to write the `data` string to a file named `output.txt`. The `writeFile` method takes three arguments: 

1. The filename to write data to.
2. The data to write.
3. A callback function that is called once file writing is completed, or an error occurs while writing.

If an error occurs while writing the file, the callback function logs an error message to the console. If the write operation is successful, the callback function logs a success message to the console.

That's it! You now know how to write a file in TypeScript.