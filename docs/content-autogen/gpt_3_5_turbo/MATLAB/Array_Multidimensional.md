In MATLAB, a multidimensional array can be created by defining the dimensions of the array and assigning values to each element.

Here's an example of how to create a 3-dimensional array in MATLAB and initialise it with random values:
```MATLAB
% Define the dimensions of the array
rows = 3;
cols = 4;
depth = 2;

% Create the array
A = rand(rows, cols, depth);

% Print the array
disp(A);
```
This creates a random 3-dimensional array `A` with dimensions 3 x 4 x 2.

Another example, creating a 4-dimensional array in MATLAB and assigning specific values to the elements:
```MATLAB
% Define the dimensions of the array
r = 2;
c = 2;
h = 2;
d = 2;

% Create the array and initialise it
B = zeros(r,c,h,d);

% Assign values to elements of the array
B(1,1,1,1) = 1;
B(1,2,2,1) = 2;
B(2,1,1,1) = 3;
B(2,2,2,1) = 4;

% Print the array
disp(B);
```
This creates a 4-dimensional array `B` with dimensions 2 x 2 x 2 x 2 and assigns values to select elements. Note that `zeros` is used to initialise the array with all elements set to 0.