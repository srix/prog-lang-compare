In C++, Array concatenation can be done using loops or by using the standard template library (STL) function.

Here’s an example using loops:

```cpp
#include<iostream>
using namespace std;
int main()
{
    int arr1[5]={1,2,3,4,5};
    int arr2[5]={6,7,8,9,10};
    int size1=sizeof(arr1)/sizeof(arr1[0]);
    int size2=sizeof(arr2)/sizeof(arr2[0]);
    int size=size1+size2,i,j;
    int arr[size];
    for(i=0;i<size1;i++)
    arr[i]=arr1[i];
    for(j=0;j<size2;j++)
    arr[i++]=arr2[j];
    cout<<"The concatenated array is : ";
    for(int k=0;k<size;k++)
    cout<<arr[k]<<" ";
    cout<<endl;
    return 0;
}
```

Output

```
The concatenated array is : 1 2 3 4 5 6 7 8 9 10
```

Also, we can concatenate arrays using an STL function called as std::copy.

Here's an example:

```cpp
#include<iostream>
#include<algorithm>
using namespace std;
int main()
{
    int arr1[5]={1,2,3,4,5};
    int arr2[5]={6,7,8,9,10};
    int size1=sizeof(arr1)/sizeof(arr1[0]);
    int size2=sizeof(arr2)/sizeof(arr2[0]);
    int size=size1+size2,i;
    int arr[size];
    std::copy(arr1, arr1+size1, arr);
    std::copy(arr2, arr2+size2, arr+size1);
    cout<<"The concatenated array is : ";
    for(int k=0;k<size;k++)
    cout<<arr[k]<<" ";
    cout<<endl;
    return 0;
}
```

Output

```
The concatenated array is : 1 2 3 4 5 6 7 8 9 10
```
In this program, we have created two arrays arr1 and arr2 of size 5 each and initialized them with an integer. We have then calculated their size using sizeof() operator. In both the examples we have considered the same size of both the arrays, but the size of the arrays can be changed according to the user's requirements and the size of the final array should be the sum of two arrays. After finding the sum of two sizes, we have declared a new array with the sum of the size. We have used loop or copy method to assign the values of both the arrays to the new array declared above. The final array containing both the initial arrays is the concatenated array.