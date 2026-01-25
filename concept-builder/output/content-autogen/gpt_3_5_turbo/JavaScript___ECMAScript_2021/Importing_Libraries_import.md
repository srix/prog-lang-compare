In ECMAScript 2021, libraries can be imported using the `import` statement. The syntax for import statement is:

```
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1 , export2 } from "module-name";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export1 [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
```

Here's an example of importing a library that exports a default function:

```javascript
import myFunction from './my-library.js';

myFunction();  // call the default function exported by the module
```

Here's an example of importing a library that exports multiple named functions:

```javascript
import { myFunction1, myFunction2 } from './my-library.js';

myFunction1();  // call the first named function exported by the module 
myFunction2();  // call the second named function exported by the module 
```

In addition, here's an example of importing a library using a wildcard to import all exported functions:

```javascript
import * as myLibrary from './my-library.js';

myLibrary.myFunction1();  // call the first named function exported by the module
myLibrary.myFunction2();  // call the second named function exported by the module 
```