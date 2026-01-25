The "this or that" you are referring to is known as the "Either" type in Haskell, which is a basic way of representing a value that can be one of two possible types (either A or B). The syntax for the "Either" type is:

```haskell
data Either a b = Left a | Right b
```

Here, `a` and `b` are the types that can be used in the "Either" type. "Left" is used to store a value of type `a`, while "Right" is used to store a value of type `b". 

Here are some examples to illustrate how to assign values to "Either" type:

```haskell
-- assigning 1 as Left (Int) 
let value = Left 1 :: Either Int String 

-- assigning "hello" as Right (String) 
let value2 = Right "hello" :: Either Int String 

-- assigning ["this", "is", "a", "list"] as Right ([String]) 
let value3 = Right ["this", "is", "a", "list"] :: Either Int [String]
```
In the first example, we assigned an `Int` value of 1 to the "Left" side of the "Either" type. In the second example, we assigned a `String` value of "hello" to the "Right" side of the "Either" type. In the third example, we assigned a list of strings to the "Right" side of the "Either" type. 

You can also pattern match on an "Either" type to retrieve the values assigned to it using `case` statements. For example:

```haskell
case value of 
  Left i -> putStrLn ("Left value is " ++ show i) 
  Right s -> putStrLn ("Right value is " ++ s) 
```

We first pattern match on the value to check if it is of `Left` or `Right` constructor. In the case of `Left`, we retrieve the `Int` value by assigning it to `i` and print it as a String. In the case of `Right`, we retrieve the `String` value by assigning it to `s` and print it as a String.