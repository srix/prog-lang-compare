In TypeScript, primitive types are the basic data types that cannot be broken down any further. There are six primitive types in TypeScript:

1. **Boolean**: This represents a logical value that can be either true or false.

```typescript
let isDone: boolean = false;
```

2. **Number**: This represents both integer and floating-point numbers.

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

3. **String**: This represents a sequence of characters encased in single or double quotes.

```typescript
let name: string = "Alice";
let age: number = 30;
let sentence: string = `My name is ${name} and I am ${age} years old.`;
```

4. **Null**: This represents the intentional absence of any object value.

```typescript
let notAvailable: null = null;
```

5. **Undefined**: This represents the absence of any value and is automatically assigned to uninitialized variables.

```typescript
let undefinedVar: undefined = undefined;
```

6. **Symbol**: This is a new primative type in TypeScript and it was introduced in ECMAScript 6. It is used as an identifier for object properties.

```typescript
let uniqueObj: symbol = Symbol("unique");
```

These primitive types are the building blocks of more complex data types in TypeScript.