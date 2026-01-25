In Java 10, the concept of local variable type inference was introduced which allows a variable to be declared with the keyword 'var' instead of its type. Block binding feature builds upon this and introduces the ability to declare a block of code with its own scope and context.

Block binding can be used in Java 20 by declaring a code block using curly braces. Within this block, you can declare variables using 'var' keyword. These variables are only accessible within that particular block of code and its nested blocks.

Here's an example:

```
{
  var x = 10;
  var y = "Hello World";
  
  System.out.println(x);
  System.out.println(y);
}
```

In the above example, we have declared a new block of code using curly braces and within that, we have declared two variables 'x' and 'y'. The variables are initialized with a value of 10 and "Hello World" respectively. We can access these variables within the block of code, but outside of this block, these variables are not available.

Block binding can also be used within loops and if statements. For example:

```
for(int i=0; i<5; i++){
    if(i%2 == 0){
        var x = "Even";
        System.out.println(x);
    }
}
```

In the above example, we have declared a variable 'x' within the if block of code. This variable is only accessible within the if statement, and it gets initialized with the value of "Even" when the condition in the if statement evaluates to true.

Overall, block binding is a useful feature in Java that allows us to declare variables within a specific block of code and restrict access to them from outside. This can help improve the clarity and maintainability of code.