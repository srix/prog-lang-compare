Destructuring assignment is a convenient way to extract and assign values from arrays, structures, and cell arrays in MATLAB using a single line of code. It allows you to avoid writing repetitive code to extract each element and assign it to a separate variable.

Here are examples of how to use destructuring assignment in MATLAB:

1. Extracting values from an array:

Assuming we have an array A with three elements: `A = [1 2 3]`, and we want to extract each element and assign it to a separate variable x, y, and z, we can do:

```
[x, y, z] = A
```

Now, x will be assigned the value 1, y will be assigned the value 2, and z will be assigned the value 3.

2. Extracting values from a structure:

Assuming we have a structure S with two fields: `S.name = 'John'` and `S.age = 30`, and we want to extract the values and assign them to separate variables, we can do:

```
{name, age} = struct2cell(S)
```

Now, name will be assigned the value 'John', and age will be assigned the value 30.

3. Extracting values from a cell array:

Assuming we have a cell array C with three elements: `C = {1, 'hello', [1 2 3]}`, and we want to extract each element and assign it to a separate variable x, y, and z, we can do:

```
[x, y, z] = C{:}
```

Now, x will be assigned the value 1, y will be assigned the value 'hello', and z will be assigned the vector [1 2 3].

In summary, destructuring assignment is a useful feature in MATLAB that helps simplify code and makes it easier to extract values from arrays, structures, and cell arrays.