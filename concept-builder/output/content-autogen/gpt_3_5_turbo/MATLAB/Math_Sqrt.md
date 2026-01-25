Sure, here's how to get the square root of a number in MATLAB:

1. Using the sqrt() function:
The sqrt() function is used to calculate the square root of a number. An example of using the sqrt() function to find the square root of a number is as follows:

```
num = 16;
sqrt_num = sqrt(num);
disp(sqrt_num)
```
Output: 4

2. Using exponentiation:
In MATLAB, raising a number to the power of 0.5 is equivalent to finding its square root. An example is as follows:

```
num = 25;
sqrt_num = num ^ 0.5;
disp(sqrt_num)
```
Output: 5

In both cases, the variable named sqrt_num stores the value of the square root of the number stored in the variable num, and the disp() function is used to display the value of sqrt_num.