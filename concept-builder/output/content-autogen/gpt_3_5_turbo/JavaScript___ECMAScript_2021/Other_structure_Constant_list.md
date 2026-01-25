In JavaScript - ECMAScript 2021, we can use a constant list to define a list of values that cannot be modified after initialization. Here's how to use constant lists in JavaScript:

Using the `const` keyword, we can declare a constant list like this:

```javascript
const my_list = ["apple", "banana", "orange"];
```

Here, we have defined a constant list called `my_list` that contains three string values. Because we have used the `const` keyword, we cannot modify the contents of the list.

Now, let's see an example of how to use this constant list in a program:

```javascript
const my_list = ["apple", "banana", "orange"];

for (let i = 0; i < my_list.length; i++) {
  console.log(my_list[i]);
}
```

In this example, we have used a `for` loop to iterate over the elements of the `my_list` constant list and print each element to the console.

We can also use other methods of arrays such as `map()`, `filter()`, and `reduce()` on constant lists to perform various operations. Here is an example using `map()`:

```javascript
const my_numbers = [4, 6, 2, 7];

const doubled_numbers = my_numbers.map(num => num * 2);

console.log(doubled_numbers); // Output: [8, 12, 4, 14]
```

In this example, we first create a constant list `my_numbers` that contains four numbers. We then use the `map()` method to create a new constant list called `doubled_numbers` that contains each number in `my_numbers` multiplied by 2.

So, we can use constant lists in JavaScript - ECMAScript 2021 just like any other array, but we cannot modify the original values of the list after initialization using the `const` keyword.