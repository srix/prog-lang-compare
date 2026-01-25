In ECMAScript 2021, there are various ways to iterate over an array with index in JavaScript. Some of them include:

1. Traditional for loop:

The traditional for loop is the most common way to iterate over an array with index in JavaScript. Here is an example:

```
const array = ["apple", "banana", "orange"];

for(let i = 0; i < array.length; i++) {
   console.log(i, array[i]);
}
```

Output:

```
0 apple
1 banana
2 orange
```

2. for...of loop:

The for...of loop is another way to iterate over an array with index. It is simpler and more readable. Here is an example:

```
const array = ["apple", "banana", "orange"];

for(let [index, element] of array.entries()) {
   console.log(index, element);
}
```

Output:

```
0 apple
1 banana
2 orange
```

3. forEach method:

The forEach method is a built-in method to iterate over an array with index in JavaScript. Here is an example:

```
const array = ["apple", "banana", "orange"];

array.forEach((element, index) => {
   console.log(index, element);
});
```

Output:

```
0 apple
1 banana
2 orange
```

Note: The forEach method does not return a value, so you cannot use it for filtering or mapping the array.

4. for...in loop:

The for...in loop is not recommended to iterate over an array with index because it can also iterate over object properties. Use it only when you need to access the property name, not the value. Here is an example:

```
const array = ["apple", "banana", "orange"];

for(let index in array) {
   console.log(index, array[index]);
}
```

Output:

```
0 apple
1 banana
2 orange
```

Note: The for...in loop can also iterate over properties inherited from the prototype chain.