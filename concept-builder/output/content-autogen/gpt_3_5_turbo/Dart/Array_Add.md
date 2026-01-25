In Dart, we can add elements to an array in multiple ways. Here are some ways to add elements to an array:

1. Using the add() method:
This method allows you to add an element to the end of the array. For example:

```
var fruits = ['apple', 'banana', 'orange'];
fruits.add('grape');
print(fruits); // Output: [apple, banana, orange, grape]
```
In this example, the `add()` method is used to add the element "grape" to the end of the fruits array.

2. Using the insert() method:
This method allows you to insert an element at a specific index in the array. For example:

```
var fruits = ['apple', 'banana', 'orange'];
fruits.insert(1, 'grape');
print(fruits); // Output: [apple, grape, banana, orange]
```
In this example, the `insert()` method is used to insert the element "grape" at index 1 in the fruits array.

3. Using the spread operator:
This method allows you to concatenate two or more arrays together. For example:

```
var fruits = ['apple', 'banana', 'orange'];
var moreFruits = ['grape', 'kiwi'];
fruits = [...fruits, ...moreFruits];
print(fruits); // Output: [apple, banana, orange, grape, kiwi]
```
In this example, the spread operator (`...`) is used to concatenate the fruits and moreFruits arrays together, with the result being assigned to the fruits array.