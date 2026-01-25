In Java 20, you can check the value of an object or primitive type to see if it is null, true or false using various conditional statements like if-else, ternary operator, switch statement, etc. Here are some examples to demonstrate each:

Checking for null value using if-else statement:

```
String str = null;
if(str == null) {
    System.out.println("String is null");
} else {
    System.out.println("String is not null");
}
```

Output:
```
String is null
```

Checking for true/false value using if-else statement:

```
boolean flag = true;
if(flag) {
    System.out.println("Flag is true");
} else {
    System.out.println("Flag is false");
}
```

Output:
```
Flag is true
```

Using ternary operator to check for null value:

```
String str = null;
String result = (str == null) ? "String is null" : "String is not null";
System.out.println(result);
```

Output:
```
String is null
```

Using switch statement to check for true/false value:

```
boolean flag = true;
switch(flag) {
    case true:
        System.out.println("Flag is true");
        break;
    case false:
        System.out.println("Flag is false");
        break;
}
```

Output:
```
Flag is true
```