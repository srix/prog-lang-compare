In C++, we can use the STL (Standard Template Library) algorithm `std::accumulate` to reduce an array to a single value.

Here is an example code:

```c++
#include <iostream>
#include <numeric>
using namespace std;

int main() {
    int arr[] = { 1, 2, 3, 4, 5 };
    int sum = accumulate(begin(arr), end(arr), 0);
    cout << "Sum of array is " << sum << endl;
    return 0;
}
```

In this code, we first declare an integer array `arr` with 5 values. We then use the `std::accumulate` function to calculate the sum of these values. The `accumulate` function takes three arguments: the beginning iterator of the array, the ending iterator of the array, and the initial value of the accumulation (which is 0 in this case).

The `accumulate` function returns the sum of all the values in the array, which we then print to the console using `cout`.