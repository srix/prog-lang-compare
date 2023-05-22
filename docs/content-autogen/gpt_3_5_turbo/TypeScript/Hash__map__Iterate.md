In TypeScript, we can iterate over a hash (also known as an object) using a loop. Here's an example:

```
const myObj = {
	name: "John",
	age: 30,
	country: "USA"
};

for (let key in myObj) {
	console.log(key + ": " + myObj[key]);
}
```

In this example, we have defined an object called `myObj` with three key-value pairs. To iterate over the object using a loop, we use the `for..in` loop syntax.

Inside the loop, we use the `key` variable to access each key in the object, and use the `[key]` syntax to get the value associated with each key. We then log each key-value pair to the console.

This will output:

```
name: John
age: 30
country: USA
```

Note that the order of the keys cannot be guaranteed in an object/hash, so they may be output in a different order each time the loop is run.