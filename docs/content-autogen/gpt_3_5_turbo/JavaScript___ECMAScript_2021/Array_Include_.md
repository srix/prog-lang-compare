In JavaScript, we can check if an array includes an element in multiple ways. One of the easiest and efficient ways is by using the `includes()` method. 

The `includes()` method determines whether an array includes a certain element, returning either `true` or `false` as appropriate. This method compares the element with every item in the array using strict equality (the same method used by the `===` operator).

Here is an example of using the `includes()` method:

```
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.includes(30)); // Output: true
console.log(numbers.includes(25)); // Output: false
```

In this example, we first create an array called `numbers` that contains multiple elements. We then use the `includes()` method to check if the number `30` is present within the array. As `30` is included in the array, the output is `true`. We then check if another number, `25`, is present within the array, which is not included in the array, so the output is `false`. 

It's important to note that the `includes()` method is case-sensitive, which means that it will match elements based on their exact value and case. So, for example, `includes('apple')` will not match with `'Apple'`.

Another way to check if an element exists in an array is by using the `indexOf()` method. This method returns the index of the element if it exists in the array, and `-1` if it does not exist. Here is an example:

```
const fruits = ['apple', 'banana', 'grape', 'kiwi'];
console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('orange')); // Output: -1
```

In this example, we first create an array called `fruits`, which contains multiple elements. We then use the `indexOf()` method to check if the string `'banana'` exists in the `fruits` array. Since it exists in the array, the output is `1`, which is the index at which the element is found. We then check if another string, `'orange'`, exists in the `fruits` array, but it does not exist, so the output is `-1`.

Both `includes()` and `indexOf()` methods are very handy in checking if an element exists in an array in JavaScript- ECMAScript 2021.