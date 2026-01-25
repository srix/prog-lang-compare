In Haskell, a private method is a function that is not directly accessible from outside of the module that it is defined in. It is declared using the `private` keyword before the function name.

Here is an example of how to define a private method in Haskell:

```
module ExampleModule where

publicFunction :: Int -> Int
publicFunction x = privateFunction x + 1

privateFunction :: Int -> Int
privateFunction x = x * 2
```

In this example, `publicFunction` is accessible from outside of the module, but `privateFunction` is not.

To use the private method `privateFunction`, you need to call it from within another function within the same module, like `publicFunction` in this case.

If you try to call `privateFunction` from outside of the module, you will get a compile-time error.

Here is an example of how to use these functions:

```
> import ExampleModule

> publicFunction 5
11

> privateFunction 5
<interactive>:2:1: error:
    • No instance for (Num a0) arising from a use of ‘privateFunction’
    • In the expression: privateFunction 5
      In an equation for ‘it’: it = privateFunction 5
``` 

As you can see, calling `privateFunction` outside of the module results in a compile-time error.