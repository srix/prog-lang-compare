To check if a value is null in Dart, you can use the `==` operator as shown:

```
var value;
if(value == null) {
  print("Value is null");
} else {
  print("Value is not null");
}
```

To check if a value is true or false, you can use the value itself in a conditional statement:

```
var value = true;
if(value) {
  print("Value is true");
} else {
  print("Value is false");
}
```

Alternatively, you can also use the `==` operator to compare the value to true/false, as shown:

```
var value = false;
if(value == true) {
  print("Value is true");
} else {
  print("Value is false");
}
```