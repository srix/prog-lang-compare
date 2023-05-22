In C++, a function or method can accept multiple arguments which can be used inside the function body to perform some action or return some result. To use multiple arguments in a function or method, you need to declare the arguments inside the parentheses separated by commas.

Here is an example of a function that accepts three integer arguments and returns their sum:

```
int sum(int a, int b, int c)
{
   int result = a + b + c;
   return result;
}
```

To call this function with three arguments, you simply pass the values separated by commas:

```
int total = sum(1, 2, 3);
// total = 6
```

Here's an example of a method in a class that accepts two integer arguments and updates the value of a class member variable:

```
class MyClass {
public:
   void add(int a, int b) {
      int result = a + b;
      myValue += result; // assume myValue is a class member variable
   }

private:
   int myValue = 0;
};

MyClass obj;
obj.add(2, 3); // myValue now equals 5
```

In summary, to use multiple arguments in a function or method in C++, you simply declare the arguments separated by commas inside the parentheses and use them in your function or method body.