To get the parent directory path in JavaScript, you can use the `URL` constructor and the `pathname` property.

Here's an example code snippet:

```javascript
const url = new URL('https://www.example.com/path/to/file.html');
const parentDirPath = url.pathname.split('/').slice(0, -1).join('/') + '/'; // /path/to/

console.log(parentDirPath); // Output: /path/to/
```

This code creates a new `URL` instance with the file path and then uses the `pathname` property to extract the directory path. The path is split into an array using the `/` delimiter, and then all but the last element (the file name) is selected using `slice`. Finally, the elements of the array are joined back together using `/` to form the parent directory path.

Alternatively, you could use the `path.dirname` method from Node.js, which is available in the latest versions of ECMAScript. Here's an example:

```javascript
import { dirname } from 'path';

const filePath = '/path/to/file.html';
const parentDirPath = dirname(filePath);

console.log(parentDirPath); // Output: /path/to
```

This code imports the `dirname` method from the built-in `path` module in Node.js. The method takes a file path as input and returns the parent directory path.