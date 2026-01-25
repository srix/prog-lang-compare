A constant in C++ is a symbol or an identifier that represents a fixed value that cannot be altered during program execution. Constants are useful because, once defined, they remain the same throughout the program, providing improved readability, security, and maintenance of the code.

In C++, we can define constants using the "const" keyword, which tells the compiler that the value cannot be modified. Constant values defined using the "const" keyword are stored in read-only memory (ROM) section of the program, which means that the value cannot be changed.

Here are a few examples to explain how constants work in C++:

Example 1: Defining and using constant variables

```
#include <iostream>
using namespace std;

int main()
{
   const int a = 10;
   const float b = 3.14;
   const char c = 'A';

   cout << "Value of a: " << a << endl;
   cout << "Value of b: " << b << endl;
   cout << "Value of c: " << c << endl;

   return 0;
}
```

In the above example, we have defined three constant variables - a, b, and c - of integer, float, and character types, respectively. We have assigned fixed values to these variables using the "const" keyword. We then print the value of these constants using cout statements.

Output:

```
Value of a: 10
Value of b: 3.14
Value of c: A
```

Example 2: Using constants in expressions

```
#include <iostream>
using namespace std;

int main()
{
   const int width = 5;
   const int height = 10;
   const int area = width * height;

   cout << "Area: "<< area << endl;

   return 0;
}
```

In this example, we define two constants - width and height - and use them to calculate the area of a rectangle. We then assign the result to another constant variable called "area". Finally, we print the value of the "area" variable.

Output:

```
Area: 50
```

Example 3: Using constants in conditional statements

```
#include <iostream>
using namespace std;

int main()
{
   const int age = 18;
   int userAge;

   cout << "Enter your age: ";
   cin >> userAge;

   if (userAge < age)
   {
      cout << "Sorry, you are not eligible." << endl;
   }
   else
   {
      cout << "Congratulations, you are eligible!" << endl;
   }

   return 0;
}
```

In this example, we have defined a constant variable called age with a fixed value of 18. We ask the user to enter their age using the 'cin' statement and store the input in the variable userAge. We then check if the user's age is less than the constant age using an if-else statement. If the user's age is less than 18, the if block is executed, and the user is not eligible; otherwise, the else block is executed. 

Output:

```
Enter your age: 20
Congratulations, you are eligible!
```

These are just a few examples of using constants in C++. Constants provide a powerful way to declare values in your code that remain fixed throughout the program's execution.