Sure! In Kotlin, you can delete an element from an array using the built-in `removeAt()` or `remove()` function. Here are some examples:

To delete an element at a specific index (let's say at index 2) using `removeAt()` function, you would do:

```
val array = arrayOf(1, 2, 3, 4, 5)
array.removeAt(2)
```

Here, the element at index 2 (which is `3`) will be removed from the `array`.

Alternatively, you can also remove an element by its value using the `remove()` function. For example:

```
val array = arrayOf(1, 2, 3, 4, 5)
array.remove(3)
```

In this case, the first element with value of `3` will be removed from the `array`.

If there are multiple elements with the same value, only the first one encountered will be removed.

I hope that helps!