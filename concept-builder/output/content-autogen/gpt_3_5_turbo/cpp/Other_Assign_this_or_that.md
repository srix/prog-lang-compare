In C++, the conditional operator (also known as the ternary operator) can be used to assign a value based on a condition. This is commonly referred to as "this or that" or "if then else" statement. It has the following syntax:

```
(condition) ? true_expression : false_expression;
```

If the condition is true, the true_expression is evaluated and assigned to the variable. If the condition is false, the false_expression is evaluated and assigned to the variable.

Here's an example:

```c++
#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int x;

    // Assigning "this" or "that" value based on condition
    x = (num >= 10) ? 100 : 200;

    cout << "Value of x: " << x << endl;

    return 0;
}
```

In this example, we're initializing two variables: `num` and `x`. We're using `x` to store a value based on the condition `(num >= 10)`. If the condition is true (i.e., `num` is greater than or equal to 10), `x` will be assigned the value `100`. If the condition is false, `x` will be assigned the value `200`. 

So in this case, since `num` equals to 10, the condition is true, and `x` gets assigned the value `100`. The output would be:

```
Value of x: 100
```