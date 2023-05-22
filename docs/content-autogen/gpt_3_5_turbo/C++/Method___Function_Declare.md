In C++, a function is declared using the following syntax:

```cpp
return_type function_name(parameters){
//function body
}
```

Here, `return_type` represents the data type of the value returned by the function. If the function doesn't return anything, `void` is used. 

`function_name` is the name of the function, and `parameters` is the list of input parameters passed to the function.

For example, let's declare a function that adds two integers and returns their sum:

```cpp
int add(int a, int b){
    int sum = a + b;
    return sum;
}
```

In the above function, `int` is the return type, `add` is the function name, and `a` and `b` are the input parameters.

Another example of declaring a function that doesn't return anything (i.e., `void`):

```cpp
void print_string(string s){
    cout << s << endl;
}
```

Here, `void` indicates that the function doesn't return any value. `print_string` is the function name, and `s` is the input parameter.

In C++, we can also declare a method, which is a function that is part of a class definition. The syntax for declaring a method in a class is:

```cpp
class Class_name{
    public:
        return_type method_name(parameters){
            //method body
        }
};
```

Here, `Class_name` is the name of the class, `return_type` is the data type of the value returned by the method (or `void` if the method doesn't return anything), and `method_name` is the name of the method.

Let's take an example of declaring a method `get_area` in a class `Rectangle` that returns the area of a rectangle:

```cpp
class Rectangle{
    private:
        int length, width;
    public:
        void set_dimensions(int l, int w){
            length = l;
            width = w;
        }
        int get_area(){
            int area = length * width;
            return area;
        }
};
```

In the above example, `set_dimensions` and `get_area` are methods of class `Rectangle`. `set_dimensions` assigns values to the private members `length` and `width`. `get_area` calculates the area of the rectangle and returns its value as an integer.