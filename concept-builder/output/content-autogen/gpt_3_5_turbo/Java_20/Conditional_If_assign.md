In Java 2.0, if statements are used for conditional programming. The 'if' keyword, followed by a condition in parentheses, is used to begin an if statement. If the condition is true, the code block associated with it will be executed. Otherwise, it will be skipped.

Here is an example of the basic syntax for an if statement in Java:

```
if (condition) {
    // Code block executed if the condition is true
}
```

Here are a few examples of how to use if statements in Java:

Example 1: Checking if a number is positive or negative

```
int num = 7;
if (num > 0) {
    System.out.println("The number is positive.");
} else {
    System.out.println("The number is negative.");
}
```

Output: The number is positive.

Example 2: Checking if a string is empty

```
String name = "";
if (name.equals("")) {
    System.out.println("The name is empty.");
} else {
    System.out.println("The name is not empty.");
}
```

Output: The name is empty.

Example 3: Checking if a user is an admin

```
User user = new User();
if (user.isAdmin()) {
    System.out.println("The user is an admin.");
} else {
    System.out.println("The user is not an admin.");
}
```

Output: The user is an admin. (Assuming the isAdmin() method returns true if the user is an admin.)