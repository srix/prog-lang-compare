In Haskell, we can access an instance variable inside a private method of a class by passing the instance variable as an argument to the private method.

Consider the following example:

```
class MyClass a where
  myMethod :: a -> Int
  
  privateMethod :: a -> Int -> Int
  privateMethod obj x = x + myVar
    where myVar = myMethod obj
  
newtype MyType = MyType { myInt :: Int }

instance MyClass MyType where
  myMethod obj = myInt obj
```

In this example, `MyClass` is a class with two methods: `myMethod` and `privateMethod`. `myMethod` takes an instance of the class as an argument and returns an `Int`. `privateMethod` takes an instance of the class and an `Int` as arguments, and returns an `Int` that is the sum of the input `Int` and an instance variable `myVar`.

We define an instance `MyType` of `MyClass` that has a single instance variable `myInt`.

We can now use `privateMethod` to access `myVar` which is initialized to the value returned by `myMethod`. For example:

```
main :: IO ()
main = do
  let obj = MyType 10
  let result = privateMethod obj 5
  print(result) -- outputs 15
```

Here, we create an instance `obj` of `MyType` with `myInt` equal to 10. We call `privateMethod` with `obj` and `5` as arguments, and the result is `15` which is the sum of `myInt` and `5`.