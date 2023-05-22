In JavaScript, you can write (create and/or overwrite) a file using the Node.js `fs` module. Here's an example:

```javascript
const fs = require('fs');

const content = 'some text to write to the file';

fs.writeFile('example.txt', content, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully.');
});
```

In this example, we first import the `fs` module and then create a variable `content` which contains the text we want to write to the file. Next, we use the `writeFile` method of the `fs` module to write to the file named `example.txt`. The second argument is the content we want to write to the file. The third argument is an optional callback function that will be called once the file has been written (or if an error occurs during writing).

If the file already exists, its contents will be overwritten. If it does not exist, it will be created. However, if the directory in which you are trying to write doesn't exist, you'll get an error.

You can also specify additional options when calling `writeFile`, such as encoding and file mode. Here's an example:

```javascript
const fs = require('fs');

const content = 'some text to write to the file';
const options = { encoding: 'utf8', mode: 0o666 };

fs.writeFile('example.txt', content, options, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully.');
});
```

In this example, we've added an `options` object as the third argument to `writeFile`. This object contains two properties, `encoding` and `mode`. The `encoding` property is set to `'utf8'`, which specifies that we want to write the file in UTF-8 encoding. The `mode` property is set to `0o666`, which specifies the file permissions (read, write, and execute permissions for all users).

Overall, writing a file in JavaScript is fairly simple and can be done using the `fs` module in Node.js.