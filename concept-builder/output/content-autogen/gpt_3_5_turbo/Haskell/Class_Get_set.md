In Haskell, the `get` and `set` functions are used to access and modify fields of a record. 

In order to demonstrate how to use `get` and `set`, let's create a simple example class called `Person` that has two fields: `name` and `age`.

```
data Person = Person { 
  name :: String,
  age :: Int
} deriving (Show)
```

Here, we have defined the `Person` class using the `data` keyword and defined two fields using the record syntax.

To access the `name` field of a `Person` object, we can use the `name` function as follows:

```
pName :: Person -> String
pName p = name p
```

This function takes a `Person` object as input and returns its `name` field.

To modify the `name` field of a `Person` object, we can use the `set` function as follows:

```
setName :: String -> Person -> Person
setName n p = p {name = n}
```

This function takes a `String` and a `Person` object as input, modifies the `name` field and returns the updated `Person` object.

Here's an example of how we would use these functions:

```
-- create a person
mike = Person {name = "Mike", age = 26}

-- get the person's name
mikeName = pName mike     -- returns "Mike"

-- set the person's name
mike' = setName "Michael" mike -- creates a new Person object with name "Michael" instead of "Mike"
``` 

Overall, the `get` and `set` functions in Haskell allow us to easily access and modify record fields, making it easy to work with complex data structures.