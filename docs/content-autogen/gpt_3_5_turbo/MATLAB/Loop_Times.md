In MATLAB, you can use the `times` function to perform element-wise multiplication of arrays, or to multiply a scalar value with an array.

Here are some examples:

**Element-wise multiplication:**

```matlab
a = [1 2 3]; % Create an array
b = [4 5 6];
c = times(a,b); % Multiply element-wise
disp(c); % Display result: [4 10 18]
```

**Scalar multiplication:**

```matlab
a = [1 2 3];
b = 2;
c = times(a,b); % Multiply a by a scalar value
disp(c); % Display result: [2 4 6]
```

**Multiplication of matrices:**

```matlab
a = [1 2; 3 4]; % Create a matrix
b = [5 6; 7 8];
c = times(a,b); % Multiply element-wise
disp(c); % Display result: [5 12; 21 32]
```

Note that the `times` function is equivalent to the `.*` operator in MATLAB. So, you can also perform element-wise multiplication using the `.*` operator as shown below:

```matlab
a = [1 2 3];
b = [4 5 6];
c = a .* b; % Element-wise multiplication using .*
disp(c); % Display result: [4 10 18]
```

Hope this helps!