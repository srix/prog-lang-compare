To import another file in TypeScript, you can use the `import` statement. Here's an example of how to import a module from another file:

```typescript
// file1.ts
export const foo = 'hello';

// file2.ts
import { foo } from './file1';
console.log(foo); // Output: 'hello'
```

In the above example, we export a constant `foo` from `file1.ts` using the `export` keyword. In `file2.ts`, we import `foo` using the `import` statement and provide the path to `file1.ts`. Note that the curly braces `{ }` are used to destructure the exported constants from `file1.ts`.

Alternatively, you can also use the `export default` syntax to export a default value from a module and import it without using curly braces:

```typescript
// file1.ts
const greeting = 'hello';
export default greeting;

// file2.ts
import greeting from './file1';
console.log(greeting); // Output: 'hello'
```

In this example, we export a default value `greeting` using `export default` in `file1.ts` and import it in `file2.ts` again using the `import` statement but without curly braces since there is only one default export. Note that the name of the variable in `file2.ts` is not necessarily the same as the exported value's name.