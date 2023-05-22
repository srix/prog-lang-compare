Destructuring assignment is a feature in Dart that allows you to extract values from objects and arrays and more easily assign them to variables. Here are some examples of how to use destructuring assignment in Dart:

1. Destructuring assignment with arrays
```
var list = [1, 2, 3];
var [a, b, c] = list;

print(a); // 1
print(b); // 2
print(c); // 3
```

2. Destructuring assignment with maps
```
var person = {"name": "John Doe", "age": 30};
var {name, age} = person;

print(name); // John Doe
print(age); // 30
```

3. Destructuring assignment with nested objects
```
var person = {"name": "John Doe", "age": 30, "address": {"city": "New York", "state": "NY"}};
var {name, age, address: {city, state}} = person;

print(name); // John Doe
print(age); // 30
print(city); // New York
print(state); // NY
```

4. Destructuring assignment with default values
```
var person = {"name": "John Doe", "age": 30};
var {name, age, email = "unknown"} = person;

print(name); // John Doe
print(age); // 30
print(email); // unknown
```

5. Destructuring assignment with function parameters
```
void foo({String name, int age}) {
  print(name);
  print(age);
}

foo(name: "John Doe", age: 30);
```

You can also use destructuring assignment to extract values directly from function parameters:
```
void foo({String name, int age}) {
  var {firstName, lastName} = name.split(" ");
  print(firstName);
  print(lastName);
  print(age);
}

foo(name: "John Doe", age: 30);
```

These are just some examples of how to use destructuring assignment in Dart. Overall, destructuring assignment can make your code more concise and easier to read when working with objects and arrays.