To create an array in Rust 1.55, you need to specify the type and the size of the array.

Here is an example of creating an array of integers with size 3:

```
let my_array: [i32; 3] = [1, 2, 3];
```

In this example, `my_array` is the name of the array, `[i32; 3]` specifies the type (an array of 3 integers), and `[1, 2, 3]` are the values of the array.

You can also initialize the array with the same value for all elements:

```
let my_array: [i32; 3] = [0; 3];
```

In this example, the array is initialized with 3 zeros.

You can access individual elements in the array using indexing:

```
let my_array: [i32; 3] = [1, 2, 3];
let first_element = my_array[0];
let second_element = my_array[1];
```

In this example, `first_element` is assigned the value `1`, and `second_element` is assigned the value `2`.

Note that Rust arrays have a fixed size, which is determined at compile time. If you need a collection that can grow or shrink dynamically, you may want to use a `Vec` instead.