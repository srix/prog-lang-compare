In Haskell, a struct is represented using records. Records are a feature of Haskell that allows you to group together different data types into a single data structure.

Here's an example of how to use struct in Haskell using records:

```haskell
data Person = Person 
  { name :: String
  , age :: Int
  , occupation :: String
  }
```

In this example, we're defining a `Person` record that consists of three fields: `name`, `age`, and `occupation`. The `name` and `occupation` fields are of type `String`, while `age` is of type `Int`. We can now create instances of this record type as follows:

```haskell
person1 = Person "John" 30 "Engineer"
person2 = Person "Mary" 28 "Teacher"
```

Now, `person1` and `person2` are both instances of the `Person` record type. We can access the fields of these instances using the dot notation:

```haskell
ghci> name person1
"John"
ghci> age person2
28
```

We can also update the fields of a record using the same dot notation:

```haskell
updatedPerson = person1 { occupation = "Manager" }
```

In this example, we're creating a copy of `person1` with the `occupation` field updated to "Manager". The result is a new instance of the `Person` record type that has the same values for `name` and `age`, but a different value for `occupation`. 

So, to summarize, in Haskell, you can use records to define a struct-like data type, and you can create instances of this data type by specifying the values for each field. You can also access and update the fields of an instance using dot notation.
