To get the first and last element of an array in Lua, you can use the index operator [] with the appropriate index. 

To get the first element of an array A in Lua, you can use A[1]. 

Example: 

```
A = {"apple", "banana", "orange", "mango"}
firstElement = A[1]
print(firstElement) --> output: apple
```

To get the last element of an array A in Lua, you can use the length of the array and the index operator [].

Example: 

```
A = {"apple", "banana", "orange", "mango"}
lastElement = A[#A]
print(lastElement) --> output: mango
```

Here, `#A` returns the length of the array A, i.e. 4. So `A[#A]` returns the value at the index 4, which happens to be the last element of the array, i.e. mango.