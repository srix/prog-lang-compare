In Haskell, aliases are called type synonyms. They allow you to create a new name for an existing type. Here is an example of how to create a type synonym:

```
type IntList = [Int]
```

This creates a type synonym called `IntList` for the type `[Int]`. Now you can use `IntList` anywhere you would normally use `[Int]`. For example:

```
foo :: IntList -> Int
foo xs = sum xs
```

Here, `foo` takes an `IntList` and returns the sum of its elements.

You can also create type synonyms for more complicated types. For example:

```
type User = (String, Int, String)
```

This creates a type synonym called `User` for the tuple `(String, Int, String)`. Now you can create functions that take and return `User`s:

```
userToString :: User -> String
userToString (name, age, city) = name ++ " is " ++ show age ++ " years old and lives in " ++ city
```

This function takes a `User` and returns a string representation of it.

Type synonyms can also be parameterized. For example:

```
type Point a = (a, a)
```

This creates a type synonym called `Point` that takes a type parameter `a`. This allows you to create `Point`s of any type. For example:

```
origin :: Point Int
origin = (0, 0)

distance :: Point Double -> Point Double -> Double
distance (x1, y1) (x2, y2) = sqrt ((x2 - x1) ^ 2 + (y2 - y1) ^ 2)
```

Here, `origin` is a `Point Int` and `distance` takes two `Point Double`s and returns their distance.