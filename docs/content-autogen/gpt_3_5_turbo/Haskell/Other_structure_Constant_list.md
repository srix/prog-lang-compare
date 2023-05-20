In Haskell, a constant list is a list that cannot be modified once defined. It is commonly defined using the `let` keyword and enclosed in square brackets `[]`. Here is an example of how to define and use a constant list in Haskell:

```
let numbers = [1, 2, 3, 4, 5]
-- This defines a constant list named numbers

head numbers
-- Returns the first element of the list: 1

tail numbers
-- Returns the list without the first element: [2, 3, 4, 5]

sum numbers
-- Returns the sum of the list: 15

length numbers
-- Returns the length of the list: 5

reverse numbers
-- Returns the list in reverse order: [5, 4, 3, 2, 1]
```

Note that since the constant list is immutable, you cannot add, remove or modify any elements in the list. An attempt to do so will result in a compile-time error.