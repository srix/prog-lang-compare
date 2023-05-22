In TypeScript, you can get the parent directory path using the `path` module from Node.js. The `path` module provides a variety of methods that can be used to work with file and directory paths in a platform-independent way.

Here's an example of how to get the parent directory path:

```typescript
import * as path from 'path';

const filePath = '/home/user/myapp/index.js';
const parentDirPath = path.dirname(filePath);

console.log(parentDirPath); // Output: /home/user/myapp
```

In the example above, we first import the `path` module and define a `filePath` variable that contains the path to a file (`index.js` in this case). We then use the `path.dirname()` method to get the parent directory path of the file and store it in the `parentDirPath` variable. Finally, we log the parent directory path to the console.

Another example:

```typescript
import * as path from 'path';

const filePath = 'C:\\Users\\User\\Documents\\project\\index.js';
const parentDirPath = path.dirname(filePath);

console.log(parentDirPath); // Output: C:\Users\User\Documents\project
```

In this example, we use a Windows file path and get the parent directory path using the same `path.dirname()` method. The output will be the parent directory path in the same format as the input file path.