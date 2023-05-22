In C++, float is a data type used to represent numbers with fractional parts. Float numbers are decimal numbers that need to be declared using the float keyword.

Here's an example of declaring and initializing a float variable:

```
float myFloat = 3.14159;
```

You can also perform arithmetic operations on float numbers. For example:

```
float num1 = 2.5;
float num2 = 3.7;
float sum = num1 + num2;
```

The output of the above code would be 6.2.

Furthermore, you can use the iomanip library to control the precision of floating-point numbers. Here's an example:

```
#include <iostream>
#include <iomanip>

using namespace std;

int main()
{
    float myFloat = 3.14159265358979323846;
    
    cout << setprecision(5) << myFloat << endl;
    cout << setprecision(10) << myFloat << endl;
    
    return 0;
}
```

The setprecision() function sets the number of decimal places displayed. The output of the above code would be:

```
3.1416
3.141592654
```

Note that for larger or more precise calculations, you may want to use the double or long double data types instead of float.