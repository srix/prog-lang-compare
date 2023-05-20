In Haskell, a constructor is used to create a new instance of a data type. It is defined in a data declaration and has the same name as the data type. 

Example: 

Let's say we have a data type called `Person` with two fields `name` and `age`. We can define a constructor for `Person` as:

```
data Person = Person { name :: String, age :: Int }
```

Here, we have defined a constructor `Person` that takes in two arguments `name` and `age`. 

We can create a new instance of `Person` using this constructor as:

```
person1 = Person { name = "John", age = 25 }
```

Here, we have created a new instance of `Person` with name "John" and age 25. 

We can also define multiple constructors for a data type. For example, let's say we have a data type called `Shape` that can be either a `Circle` or a `Rectangle`. We can define two constructors as:

```
data Shape = Circle { radius :: Float }
           | Rectangle { width :: Float, height :: Float }
```

Here, we have defined two constructors for `Shape` - `Circle` and `Rectangle`. 

We can create a new instance of `Shape` using these constructors as:

```
shape1 = Circle { radius = 5 }
shape2 = Rectangle { width = 10, height = 20 }
```

Here, we have created two instances of `Shape` - `shape1` is a circle with radius 5 and `shape2` is a rectangle with width 10 and height 20.