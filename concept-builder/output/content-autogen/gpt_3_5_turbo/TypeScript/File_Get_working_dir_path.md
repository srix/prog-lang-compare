In TypeScript, we can use the `process.cwd()` method to get the current working directory path. This method is available in the `process` module of Node.js.

For example, let's say we have a TypeScript file called `app.ts` in the following directory - `/home/user/projects/my-app`. To get the working directory path within this TypeScript file, we can use the following code:

```
console.log(process.cwd());
```

When we run this TypeScript file, the output will be:

```
/home/user/projects/my-app
```

Similarly, if we have another TypeScript file called `utils.ts` in the directory - `/home/user/projects/my-app/utils`, and we want to get the working directory path within this file, we can use the same code:

```
console.log(process.cwd());
```

And the output will be:

```
/home/user/projects/my-app/utils
```

So, by using the `process.cwd()` method, we can easily get the current working directory path in TypeScript.