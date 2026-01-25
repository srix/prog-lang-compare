In C#, comments are used to add notes and explanations within the source code. These notes and explanations have no effect on the actual execution of the code but they help other developers, as well as yourself, to read and understand the code.

There are three types of comments in C#:

1. Single-line comments: 
   Single-line comments begin with two forward slashes (//) and can be used for quick notes and explanations.

   Example:
   ```
   // This is a single-line comment
   ```

2. Multi-line comments:
   Multi-line comments begin with a forward slash followed by an asterisk (/*) and end with an asterisk followed by a forward slash (*/). 
   
   Example:
   ```
   /*
   This is a multi-line comment
   that spans across multiple lines
   */
   ```

3. XML comments:
   XML comments begin with three forward slashes (///) and are used to document code for automatic documentation generation tools.
   
   Example:
   ```
   /// <summary>
   /// This method adds two integer values
   /// </summary>
   /// <param name="a">The first integer value</param>
   /// <param name="b">The second integer value</param>
   /// <returns>The sum of a and b</returns>
   public int Add(int a, int b)
   {
       return a + b;
   }
   ```
   
   In the above example, the XML comments provide documentation about the `Add` method, explaining what it does, what its parameters are, and what it returns. This information can then be used by automatic documentation generation tools to create documentation for the code.