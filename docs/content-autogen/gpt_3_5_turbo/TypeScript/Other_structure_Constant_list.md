In TypeScript, a constant list can be created using the `const` keyword while declaring an array. Once created, a constant list cannot be updated, added to, or removed from.

For example, let's say you want to create a constant list of the days of the week in TypeScript. To do so, you can declare an array using the `const` keyword:

```
const daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
```

In the above example, `daysOfWeek` is a constant list of strings that contains the names of the days of the week. Since it's declared as a constant list, you cannot add or remove items from it.

You can use this constant list in your TypeScript code just like you would any other array. For example, you can loop through it using a `for...of` loop:

```
for (const day of daysOfWeek) {
  console.log(day);
}
```

This will output the following in the console:

```
Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday
```

By using a constant list, you ensure that the values in the array cannot be accidentally changed elsewhere in your code.