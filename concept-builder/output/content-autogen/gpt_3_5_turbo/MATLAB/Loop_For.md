In MATLAB, the `for` loop is used for repeating a set of statements for a fixed number of times. It is one of the most commonly used loops in programming. Here's the general syntax of how to use `for` loop in MATLAB:

```
for index = values
   statement1
   statement2
   .
   .
end
```

- `index` is a variable that takes on the values specified in `values` one after another. 
- `values` can be a vector, a range of numbers specified using the `:` operator, or a combination of both.

Let's take a few examples to understand the usage of `for` loop in MATLAB:

Example 1 - Printing numbers in a range:
```
for i = 1:5
    disp(i)
end
```
Output:
```
1
2
3
4
5
```
Here, variable `i` takes on the values between 1 to 5 one after another, and for each value of `i`, the `disp(i)` statement is executed which displays the value of `i` on the screen.

Example 2 - Printing elements of a vector:
```
A = [10, 20, 30, 40, 50]
for i = 1:length(A)
    disp(A(i))
end
```
Output:
```
10
20
30
40
50
```
Here, `length(A)` returns the number of elements in the vector `A`. For each value of `i` between 1 to 5, the `disp(A(i))` statement is executed which displays the element corresponding to that index position.

Example 3 - Looping through a matrix:
```
B = [1 2 3; 4 5 6; 7 8 9]
for i = 1:size(B, 1)
    for j = 1:size(B, 2)
        disp(B(i,j))
    end
end
```
Output:
```
1
2
3
4
5
6
7
8
9
```
Here, `size(B, 1)` and `size(B, 2)` return the number of rows and columns in the matrix `B`, respectively. The outer loop `for i = 1:size(B, 1)` goes through each row, and the inner loop `for j = 1:size(B, 2)` goes through each column in that row. The `disp(B(i,j))` statement is executed for each element in the matrix.

These are just a few examples of how to use `for` loop in MATLAB. It is a versatile tool that is frequently used in programming to repeat a set of instructions multiple times.