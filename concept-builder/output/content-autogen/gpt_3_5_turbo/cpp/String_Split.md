In C++, you can split a string into a character array by using the `stringstream` class present in the `sstream` header file.

Here is an example code snippet that shows how to split a string in C++:

```
#include <iostream>
#include <string>
#include <sstream>
#include <vector>

using namespace std;

int main() {
    string input = "Hello world! This is a sample string.";
    vector<string> result;
    stringstream ss(input);
    string token;
    char delimiter = ' ';
    
    while (getline(ss, token, delimiter)) {
        result.push_back(token);
    }
    
    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << endl;
    }
    
    return 0;
}
```

In this code, we first define the input string `input`. We then declare an empty vector named `result`to store the split strings. We declare a `stringstream` object named `ss` that takes in the input string. We then declare a `string` object named `token` that will hold the split strings.

We define a character delimiter to split the string named `delimiter`. In this example code, we use the whitespace character.

Finally, we use a `while` loop with the `getline()` function to split the input string `input`. The `getline()` function takes the `stringstream` object, the `string` to hold the split string, and the `delimiter`.

After splitting the string, we add the split string `token` to the `result` vector using the `push_back()` function.

Finally, we print the split strings stored in the `result` vector using a `for` loop.

The output of this code will be:
```
Hello
world!
This
is
a
sample
string.
```