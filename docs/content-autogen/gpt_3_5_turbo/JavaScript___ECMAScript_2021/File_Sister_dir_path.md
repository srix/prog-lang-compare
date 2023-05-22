The sister directory path can be obtained in JavaScript using the `../` notation to move up one directory level in the file system.

Here's an example of how to get the sister directory path:

```javascript
// Current directory: /home/user/project/homepage/
const sisterDir = '../aboutpage/';
```

In the example above, the current directory is `/home/user/project/homepage/`, and the `sisterDir` variable is assigned the path of the `aboutpage` directory in the same level of the file system.

If the current directory is deeper in the directory structure, then additional `../` notations may be necessary to reach the sister directory. For example:

```javascript
// Current directory: /home/user/project/homepage/js/
const sisterDir = '../../aboutpage/';
```

In the second example, the current directory is `/home/user/project/homepage/js/`, and the `sisterDir` variable is assigned the path of the `aboutpage` directory, which is two levels up in the file system.

Note that the `../` notation can also be used multiple times to move up multiple directory levels, as demonstrated in the second example.