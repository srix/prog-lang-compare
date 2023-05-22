To declare a class in C++, we use the `class` keyword followed by the name of the class. Inside the class, we can declare its data members and member functions. Here's an example:

```
class MyClass {
    private:
        int myInt;
        float myFloat;
    
    public:
        void setInt(int i) {
            myInt = i;
        }
        
        float getFloat() {
            return myFloat;
        }
};
```

In this example, we declare a class called `MyClass` with two private data members: `myInt` (an integer) and `myFloat` (a float). We also declare two member functions: `setInt()` to set the value of `myInt`, and `getFloat()` to retrieve the value of `myFloat`.

To use the class, we can create an instance of the class like this:

```
MyClass myObj;
```

We can then call the member functions like this:

```
myObj.setInt(5);
float f = myObj.getFloat();
```

In this example, we set the value of `myInt` to 5 using `setInt()`, and retrieve the value of `myFloat` using `getFloat()`.