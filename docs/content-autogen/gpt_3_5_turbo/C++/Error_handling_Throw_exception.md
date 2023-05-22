Throwing an exception allows a C++ program to respond to unexpected conditions, such as runtime errors, in a more controlled and predictable way. The general syntax for throwing an exception in C++ is as follows:

``` 
throw exception_object;
``` 

Here, `exception_object` is any object of a class that is derived from the `std::exception` class. The `std::exception` class provides a common interface for handling exceptions in C++.

For example, if we want to throw an exception when a division by zero occurs, we can write the following code:

``` 
#include <iostream>
#include <exception>
using namespace std;

int main()
{
    int x = 5, y = 0;

    try
    {
        if (y == 0)
        {
            throw runtime_error("Division by zero!");
        }

        int z = x / y;
        cout << "Result: " << z << endl;
    }
    catch (const exception& e)
    {
        cerr << "Error: " << e.what() << endl;
    }

    return 0;
}
``` 

Here, we are using a `try-catch` block to handle the exception. In this example, if the variable `y` is zero, the program will throw a `runtime_error` exception with the message "Division by zero!".

Another example is if we want to throw an exception for invalid input:

``` 
#include <iostream>
#include <exception>
using namespace std;

int main()
{
    string input;

    try
    {
        getline(cin, input);

        if (input.empty())
        {
            throw invalid_argument("Input is empty!");
        }

        cout << "Input: " << input << endl;
    }
    catch (const exception& e)
    {
        cerr << "Error: " << e.what() << endl;
    }

    return 0;
}
``` 

Here, we are using a `getline` function to read input from the user and if the input is empty, we are throwing an `invalid_argument` exception with the message "Input is empty!".

In both examples, we are catching the exception using a `catch` block and printing an error message to the console. The `what()` member function of the `exception` class is used to retrieve the error message.