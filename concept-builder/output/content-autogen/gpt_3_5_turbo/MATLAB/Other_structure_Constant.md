In MATLAB, a constant is a variable that has a fixed value that cannot be changed during program execution. Constants are declared using the "const" keyword. Here are some examples of how to use constants in MATLAB:

Example 1: Defining a constant for pi

```
const pi = 3.14159 

radius = 5 
area = pi * (radius * radius) 
```

In this example, we have defined a constant for pi. We then use this constant in our calculation of the area of a circle.

Example 2: Defining a constant for the speed of light

```
const c = 299792458  % speed of light in meters per second

distance = 10  % distance in meters
time = distance / c  % time it takes light to travel 10 meters
```

In this example, we have defined a constant for the speed of light. We then use this constant in our calculation of the time it takes light to travel a certain distance.

By using constants, we can make our code more readable, maintainable, and modifiable. If we need to change the value of a constant, we can simply change its value in one place instead of searching for every instance of its value in the code.