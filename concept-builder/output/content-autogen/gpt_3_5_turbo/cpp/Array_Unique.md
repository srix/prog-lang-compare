In C++, there are multiple ways to get the unique elements of an array. Here are two common methods:

Method 1: Using std::unique() and std::distance()

The std::unique() function can be used to eliminate consecutive duplicate elements in an array. By using std::distance(), we can get the number of distinct elements in the array. Here's an example:

```
#include <iostream>
#include <algorithm>

int main()
{
    int arr[] = {1, 2, 2, 3, 4, 4, 5};
   
    int* result = std::unique(std::begin(arr), std::end(arr));
    int num_unique = std::distance(std::begin(arr), result);
   
    std::cout << "The unique elements are: ";
    for (int i = 0; i < num_unique; ++i) {
        std::cout << arr[i] << " ";
    }
  
    return 0;
}
```

The output of this program would be: "The unique elements are: 1 2 3 4 5".

Method 2: Using std::set

The std::set container in C++ automatically eliminates duplicate elements. We can copy all the elements of the array into a std::set container, and then copy them back into the original array. Here's an example:

```
#include <iostream>
#include <set>

int main()
{
    int arr[] = {1, 2, 2, 3, 4, 4, 5};
    std::set<int> unique_set(std::begin(arr), std::end(arr));
   
    int i = 0;
    for (int element : unique_set) {
        arr[i++] = element;
    }
   
    int num_unique = unique_set.size();
   
    std::cout << "The unique elements are: ";
    for (int i = 0; i < num_unique; ++i) {
        std::cout << arr[i] << " ";
    }
  
    return 0;
}
```

The output of this program would also be: "The unique elements are: 1 2 3 4 5".