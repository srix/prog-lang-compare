In C++, you can check if a string is a valid number by using the `stoi()` and `stod()` functions. The `stoi()` function converts a string to an integer, while the `stod()` function converts a string to a double. If the string is not a valid number, these functions will throw an exception, which can be caught using a try-catch block. Here's an example:

```c++
#include <iostream>
#include <string>

using namespace std;

int main() {
    string input;
    cout << "Enter a number: ";
    cin >> input;

    try {
        int number = stoi(input);
        cout << "It's an integer!" << endl;
    } catch (...) {
        try {
            double number = stod(input);
            cout << "It's a decimal!" << endl;
        } catch (...) {
            cout << "It's not a number!" << endl;
        }
    }

    return 0;
}
```

In this example, the program prompts the user to enter a number, reads it in as a string, and then tries to convert it to an integer using `stoi()`. If that fails (i.e. the string is not a valid integer), the program tries to convert the string to a double using `stod()`. If that also fails, the program concludes that the string is not a number.