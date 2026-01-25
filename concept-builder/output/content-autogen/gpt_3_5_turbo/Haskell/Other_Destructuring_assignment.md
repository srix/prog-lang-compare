Destructuring assignment refers to the process of unpacking a data structure into separate variables. In Haskell, this can be achieved through pattern matching. Here are some examples:

1. Destructuring tuples:

``` haskell
-- define a tuple
myTuple = ("John", 30)

-- destructuring assignment
(name, age) = myTuple

-- printing the variables
putStrLn $ "Name: " ++ name ++ ", Age: " ++ show age
```

Output:

```
Name: John, Age: 30
```

2. Destructuring lists:

``` haskell
-- define a list
myList = [1, 2, 3]

-- destructuring assignment
[x, y, z] = myList

-- printing the variables
putStrLn $ "x: " ++ show x ++ ", y: " ++ show y ++ ", z: " ++ show z
```

Output:

```
x: 1, y: 2, z: 3
```

3. Destructuring custom data types:

``` haskell
-- define a custom data type
data Person = Person {
    name :: String,
    age :: Int
} deriving (Show)

-- define a person
myPerson = Person { name = "John", age = 30 }

-- destructuring assignment
Person { name = personName, age = personAge } = myPerson

-- printing the variables
putStrLn $ "Name: " ++ personName ++ ", Age: " ++ show personAge
```

Output:

```
Name: John, Age: 30
``` 

By using destructuring assignment, we can easily extract the components of a complex data structure in Haskell and work with them separately.