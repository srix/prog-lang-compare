In Swift, the `for` loop is used for iterating over a sequence, such as an array, a range of numbers or a string. 

Here is an example of using `for` loop with an array of integers:

```
let numbers = [1, 2, 3, 4, 5]
for number in numbers {
    print(number)
}
```

In the above code, `numbers` is an array of integers and we use `for-in` loop to iterate over each element in the array. The variable `number` is used to represent the current element being iterated over. In this case, the loop will iterate 5 times (the length of the array) and print each element to the console.

Another example of using `for` loop is with a range of numbers:

```
for i in 1...5 {
    print(i)
}
```

In this case, `1...5` is a range of numbers from 1 to 5. The loop will iterate five times and print each number to the console.

Lastly, here is an example of using `for` loop with a string:

```
let name = "Swift"
for character in name {
    print(character)
}
```

In this case, `name` is a string and we use `for-in` loop to iterate over each character in the string. The variable `character` is used to represent the current character being iterated over. The loop will iterate 5 times (the length of the string) and print each character to the console.