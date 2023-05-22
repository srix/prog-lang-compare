Aliases in Dart allow us to provide an alternate name for an existing class or library, making our code more concise and readable. We can create aliases for import statements and type declarations.

Here's an example of creating an alias for a library:

```
//original import statement
import 'package:flutter/material.dart';

//alias import statement
import 'package:flutter/material.dart' as myAlias;

void main() {
  //original widget declaration
  MaterialApp myApp = MaterialApp();
  
  //alias declaration
  myAlias.MaterialApp myAliasApp = myAlias.MaterialApp();
  
  //using the original widget
  runApp(myApp);
  
  //using the alias widget
  runApp(myAliasApp);
}
```

In the code above, we created an alias (`myAlias`) for the `flutter/material.dart` library. Later, we used the alias to create an instance of the `MaterialApp` widget.

We can also use aliases for type declarations, like this:

```
//original type declaration
void printInteger(int aNumber) {
  print('The number is $aNumber.');
}

//alias type declaration
typedef IntFunction = void Function(int);

void main() {
  //using the original function declaration
  printInteger(42);
  
  //using the alias function declaration
  IntFunction myFunction = printInteger;
  myFunction(42);
}
```

In this example, we created an alias (`IntFunction`) for the type `void Function(int)`. We then used the alias to create a variable (`myFunction`) that points to the `printInteger` function.

By using aliases, we can make our code easier to read and understand, especially when working with imported libraries or complex type declarations.