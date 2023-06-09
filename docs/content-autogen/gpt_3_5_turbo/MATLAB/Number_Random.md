To generate random numbers in MATLAB, you can use the built-in function rand. This function generates random numbers between 0 to 1. You can control the size of the random matrix generated by the rand function by passing in the size as a parameter. Here are some examples:

1. Generate a single random number: 

```
rand
```

Output:

```
0.4387
```

2. Generate a 3x3 matrix of random numbers:

```
rand(3)
```

Output:

```
0.7655    0.1869    0.8080
0.1869    0.4898    0.5720
0.7132    0.4456    0.7788
```

3. Generate a random vector of length 5, with values between 0 and 10:

```
rand(1,5)*10
```

Output:

```
[6.9617    9.7275    7.8122    5.2898    3.7990]
```

4. Generate a 2x4 matrix of random integers between 1 and 100:

```
randi([1,100],2,4)
```

Output:

```
    81    34    73    23
    15    58    97    74
``` 

Note that randi is a different function than rand, specifically designed to generate random integers.