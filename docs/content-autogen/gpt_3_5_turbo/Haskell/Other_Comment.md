To add comments in Haskell, we use the ‘--’ symbol. This symbol tells the compiler to ignore everything that follows on that line. Here is an example:

```
-- This is a comment in Haskell

main :: IO ()
main = do
    putStrLn "Hello World!" -- This is also a comment
```

In this example, we have two comments. The first comment is on its own line and the second comment is after a line of code. Both comments use the ‘--’ symbol. When the compiler encounters this symbol, it ignores everything that follows on that line.

Note that we can also use multi-line comments in Haskell by enclosing them in ‘{-’ and ‘-}’ symbols. Here is an example:

```
{- This is 
   a multi-line
   comment in Haskell -}

main :: IO ()
main = do
    putStrLn "Hello World!" {- This is also a comment -}
```

In this example, we have a multi-line comment. The comment starts with ‘{-’ and ends with ‘-}’. Everything in between these symbols is ignored by the compiler. We also have another comment after a line of code, and it’s enclosed in ‘{-’ and ‘-}’ symbols.