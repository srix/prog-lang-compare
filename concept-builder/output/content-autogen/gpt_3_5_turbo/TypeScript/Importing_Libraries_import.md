In TypeScript, you can import external code libraries to use in your own programs. This is done using the `import` statement.

For example, to import the `lodash` library, you would write:

```typescript
import * as _ from 'lodash';
```

The `* as` syntax imports all of the library's exported functionality into a single variable called `_`.

You can also selectively import specific functions or components from a library using the destructuring syntax. For example, to import only the `debounce` function from the `lodash` library, you would write:

```typescript
import {debounce} from 'lodash';
```

This syntax only imports the `debounce` function from the `lodash` library and assigns it to a variable with the same name.

If the library has a default export, you can import it using the `default` keyword. For example, to import the default export from the `react` library, you would write:

```typescript
import React from 'react';
```

This syntax imports the default export from the `react` library and assigns it to a variable called `React`.

You can also combine these different import syntaxes as needed. For example, to import both the `React` default export and the `useState` function from the `react` library, you would write:

```typescript
import React, {useState} from 'react';
```