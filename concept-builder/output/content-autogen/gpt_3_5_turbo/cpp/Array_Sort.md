Sorting an array is a process of arranging its elements in a particular order. The C++ standard library provides several sorting algorithms to sort an array. Here are some examples:

1. Sort an array in ascending order using the `std::sort` function:

```c++
#include <iostream>
#include <algorithm>

int main()
{
    int arr[] = {5, 2, 8, 1, 9};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    std::sort(arr, arr + n); // Sort the array
    
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " "; // Print the sorted array
    
    return 0;
}
```

Output:
```
1 2 5 8 9
```

2. Sort an array in descending order using the `std::sort` function and a custom comparator function:

```c++
#include <iostream>
#include <algorithm>

bool descending(int a, int b) {
    return a > b;
}

int main()
{
    int arr[] = {5, 2, 8, 1, 9};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    std::sort(arr, arr + n, descending); // Sort the array in descending order
    
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " "; // Print the sorted array
    
    return 0;
}
```

Output:
```
9 8 5 2 1
```

3. Sort a 2D array based on the values in a particular column using the `std::sort` function and a custom comparator lambda function:

```c++
#include <iostream>
#include <algorithm>

int main()
{
    int arr[][2] = {{5, 3}, {1, 4}, {7, 2}};
    int n = sizeof(arr)/sizeof(arr[0]);
    
    std::sort(arr, arr + n, [](const auto& left, const auto& right) {
        return left[1] < right[1];
    }); // Sort the array based on the 2nd column
    
    for (int i = 0; i < n; i++)
        std::cout << arr[i][0] << " " << arr[i][1] << "\n"; // Print the sorted array
    
    return 0;
}
```

Output:
```
7 2
5 3
1 4
```

In this example, the `std::sort` function is passed a lambda function as the comparator argument. The lambda function compares two elements of the array at a time and returns `true` if the left element should come before the right element in the sorted array. The lambda function compares the elements based on the value in the 2nd column.