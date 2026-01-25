In C++, try/catch/finally is used for exception handling. Exception handling is a way to handle errors that may occur during program execution. The try block contains the code that may throw an exception. If an exception is thrown, it is caught by the catch block, which then handles the exception. Finally block is used to execute some code, regardless of whether an exception is thrown or not.

Here's an example of how to use try/catch/finally with message in C++:

```
#include<iostream>
using namespace std;

int main()
{
    try
    {
        int a = 10;
        int b = 0;
        if(b==0)
            throw "Division by zero error";
        int c = a/b;
        cout<<c<<endl;
    }
    catch(const char* msg) //catch block with message
    {
        cerr<<msg<<endl;
    }
    finally //finally block
    {
        cout<<"End of program"<<endl;
    }

    return 0;
}
```

In this example, we are trying to divide two integers, 'a' and 'b'. If 'b' is 0, we throw an exception with the message "Division by zero error". The catch block catches this exception and displays the message using the cerr stream. The finally block is used to output "End of program" message, regardless of whether an exception was thrown or not.

Output:
```
Division by zero error

End of program
```

In summary, try/catch/finally with message is a powerful feature of C++ that allows for robust error handling in your programs.