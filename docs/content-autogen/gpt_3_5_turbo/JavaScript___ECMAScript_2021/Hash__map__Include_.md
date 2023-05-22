In ECMAScript 2021, you can check if a hash (also known as object or dictionary) includes a certain key using the "in" operator or the "hasOwnProperty" method.

1. Using the "in" operator:

To check if a hash includes a key using the "in" operator, write the code like this example:

const myObj = {a: 1, b: 2, c: 3};

if ('a' in myObj) {
  console.log('myObj has the key "a"');
} else {
  console.log('myObj does not have the key "a"');
}

// Output: myObj has the key "a"

In the example above, we create a hash called "myObj", which includes three keys ("a", "b", and "c"). We then use the "in" operator to check if "myObj" includes the key "a". If it does, we print a message saying that "myObj" has the key "a". If it doesn't, we print a message saying that "myObj" does not have the key "a".

2. Using the "hasOwnProperty" method:

To check if a hash includes a key using the "hasOwnProperty" method, write the code like this example:

const myObj = {a: 1, b: 2, c: 3};

if (myObj.hasOwnProperty('a')) {
  console.log('myObj has the key "a"');
} else {
  console.log('myObj does not have the key "a"');
}

// Output: myObj has the key "a"

In the example above, we create a hash called "myObj", which includes three keys ("a", "b", and "c"). We then use the "hasOwnProperty" method to check if "myObj" includes the key "a". If it does, we print a message saying that "myObj" has the key "a". If it doesn't, we print a message saying that "myObj" does not have the key "a".