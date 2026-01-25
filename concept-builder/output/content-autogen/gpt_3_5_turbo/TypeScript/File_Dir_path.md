To get the directory path in TypeScript, we can use the `__dirname` keyword which returns the directory path of the currently executing file. Here's an example:

```
console.log(__dirname);
```

The above code will log the directory path of the currently executing file to the console.

We can also use the `path` module in Node.js to manipulate directory paths. Here's an example:

```
import * as path from 'path';

// Get the current directory path
const currentDir = path.resolve(__dirname);

// Join two directory paths
const dirPath = path.join(currentDir, 'folder', 'file.txt');

console.log(dirPath);
```

The above code will log the directory path of the file named `file.txt` in the `folder` directory, which is relative to the current file. The `path.resolve()` method is used to get the absolute path of the current directory, while the `path.join()` method is used to join multiple paths together.