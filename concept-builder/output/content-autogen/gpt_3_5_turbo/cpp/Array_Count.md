To count the number of elements in an array that match a certain condition in C++, you can use a combination of loops and conditional statements.

Here's an example code snippet that counts the number of elements in an integer array that are even:

```
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    int count = 0;
    
    for (int i = 0; i < 5; i++) {
        if (arr[i] % 2 == 0) {
            count++;
        }
    }
    
    cout << "Number of even elements in the array: " << count << endl;
    return 0;
}
```

In this example, we first initialize an integer array `arr` with 5 elements. We also create a integer variable `count` and initialize it to 0, which will be used to keep track of the number of even elements found in the array.

We then loop through each element of the array (`arr[i]`) using a for loop, checking if it is even using a conditional statement (`if (arr[i] % 2 == 0)`). If it is even, we increment the `count` variable by 1.

Finally, we print the output by using `cout` to display the value of the `count` variable.

This code can be easily modified to count elements matching any other condition by updating the conditional statement in the `if` statement.