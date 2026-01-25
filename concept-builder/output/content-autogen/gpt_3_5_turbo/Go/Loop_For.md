In Go, the `for` loop is used to execute a block of code repeatedly until a certain condition is met. Here are a few examples to illustrate how to use `for` in Go:

1. Basic `for` loop:

```
for i := 0; i < 5; i++ {
  fmt.Println(i)
}
```

In this example, the `for` loop will start with the variable `i` equal to 0. It will then execute the code block once, and then increment `i` by 1. The loop will continue executing until `i` is no longer less than 5.

2. `for range` loop:

```
numbers := []int{2, 4, 6, 8, 10}

for index, value := range numbers {
  fmt.Println(index, value)
}
```

In this example, the `for range` loop is used to iterate over each value in the `numbers` array. The loop sets `index` to the current index in the array, and `value` to the current element's value. The loop will execute once for each element in the array.

3. `for` loop with `break`:

```
for i := 0; i < 10; i++ {
  if i == 5 {
    break
  }
  fmt.Println(i)
}
```

In this example, the `for` loop will execute until `i` is equal to 5. At that point, the `break` statement is used to exit the loop. 

4. `for` loop with `continue`:

```
for i := 0; i < 10; i++ {
  if i == 5 {
    continue
  }
  fmt.Println(i)
}
```

In this example, the `for` loop will execute until `i` is equal to 10. However, if `i` is equal to 5, the `continue` statement is used to skip to the next iteration of the loop without executing the rest of the code block.