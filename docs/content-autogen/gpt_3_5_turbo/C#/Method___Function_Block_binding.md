In C#, block binding is a feature that allows defining variables that are only accessible within a specific block of statements. This helps to encapsulate variables and prevents naming conflicts.

Here is an example of how to use block binding in C#:

```
int num = 10;

// Define a code block with block binding
{
   int num = 20;
   Console.WriteLine("Value of num inside block: {0}", num);
   // Output: Value of num inside block: 20
}

// Display the value of the num variable outside the block
Console.WriteLine("Value of num outside block: {0}", num);
// Output: Value of num outside block: 10
```

In this example, we have defined a variable `num` outside the code block. Within the code block, we've defined another variable with the same name `num`. However, since this variable is within a block that's encapsulated by curly braces, it only exists within that block. When we access the `num` value outside the block, it refers to the initial variable we defined before the code block. 

Block binding is useful when we need to create temporary variables that serve their purpose within a specific block and are no longer needed outside the block. This can help minimize the chance of naming conflicts and also improve the organization of our code.