In TypeScript, you can get the file path using the built-in `__dirname` global variable and the `path` module from Node.js.

Here's an example:

```typescript
import * as path from 'path';

const filePath = path.join(__dirname, 'file.txt');
console.log(filePath); // output: /path/to/current/directory/file.txt
```

In this example, the `path.join()` method joins the `__dirname` with the name of the file (`file.txt`) to create a full file path.

Note that `__dirname` gives you the path of the current directory, so you can use it to construct relative paths to other files in your project. You can also use other path methods, such as `path.resolve()`, to create absolute file paths.

```typescript
import * as path from 'path';

const absolutePath = path.resolve('/path/to/file.txt');
console.log(absolutePath); // output: /path/to/file.txt
```

In this example, `path.resolve()` creates an absolute path to the file `/path/to/file.txt` by resolving the path relative to the root directory.