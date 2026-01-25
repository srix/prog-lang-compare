To add an element to an array in TypeScript, you can use any of the following methods:

1. Using the `push()` method:

```
let myArray: string[] = ["apple", "banana", "orange"];
myArray.push("mango");
console.log(myArray); // Output: ["apple", "banana", "orange", "mango"]
```

2. Using the assignment operator (`=`) and the spread operator (`...`):

```
let myArray: string[] = ["apple", "banana", "orange"];
myArray = [...myArray, "mango"];
console.log(myArray); // Output: ["apple", "banana", "orange", "mango"]
```

3. Using the `concat()` method:

```
let myArray: string[] = ["apple", "banana", "orange"];
myArray = myArray.concat("mango");
console.log(myArray); // Output: ["apple", "banana", "orange", "mango"]
```

All of the above methods will add the element "mango" to the end of the array.