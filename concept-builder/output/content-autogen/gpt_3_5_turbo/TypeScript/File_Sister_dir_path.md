To get the sister directory path in TypeScript, you can make use of the `path` module. 

Here's an example code snippet to get the sister directory path in TypeScript:

```typescript
import * as path from 'path';

const sisterDirPath = path.join(__dirname, '../sisterDirectory');

console.log(sisterDirPath);
```

In the code above, we are importing the `path` module and using the `join` method to get the path to the `../sisterDirectory` directory relative to the current directory (`__dirname`). 

Note that, `__dirname` is a built-in variable in Node.js that gives you the absolute path of the directory containing the currently executing script.

You can modify the path passed to `path.join()` to target the desired sister directory.

Make sure to install the `@types/node` package to get TypeScript type definitions for Node.js modules like `path`. 

```bash
npm install @types/node
```