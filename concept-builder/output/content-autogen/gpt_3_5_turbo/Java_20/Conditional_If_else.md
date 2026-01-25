In Java 20, if/else is used to make decisions based on certain conditions. The basic syntax of if/else statement in Java is:

```
if (condition){
   // Executes when condition is true
}
else{
   // Executes when condition is false
}
```

Here are some examples:

Example 1: Checking if a number is positive or negative:

```java
int num = -7;
if (num > 0){
    System.out.println(num + " is positive");
}
else{
    System.out.println(num + " is negative");
}
```

Output:
```
-7 is negative
```

Example 2: Checking if a character is a vowel or consonant:

```java
char ch = 'a';
if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u'){
    System.out.println(ch + " is a vowel");
}
else{
    System.out.println(ch + " is a consonant");
}
```

Output:
```
a is a vowel
```

Example 3: Checking if a number is even or odd:

```java
int num = 10;
if (num % 2 == 0){
    System.out.println(num + " is even");
}
else{
    System.out.println(num + " is odd");
}
```

Output:
```
10 is even
```