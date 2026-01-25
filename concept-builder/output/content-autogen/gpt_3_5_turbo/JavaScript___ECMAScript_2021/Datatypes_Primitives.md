In JavaScript - ECMAScript 2021, there are six primitive types: 
1. `undefined`
2. `null`
3. `boolean`
4. `number`
5. `string`
6. `symbol`

Here are some explanations and examples of each primitive type: 

1. `undefined`: It represents a variable that has been declared but not assigned a value. 

    ```
    let a; 
    console.log(a); // Output: undefined 
    ```

2. `null`: It represents an intentional absence of any object value.

    ```
    let a = null; 
    console.log(a); // Output: null 
    ```

3. `boolean`: It represents a logical entity that can have two values: `true` or `false`. 

    ```
    let isTrue = true;
    let isFalse = false;
    console.log(isTrue); // Output: true
    console.log(isFalse); // Output: false
    ```

4. `number`: It represents numeric values. 

    ```
    let num = 123; 
    console.log(num); // Output: 123
    ```

5. `string`: It represents a sequence of characters and allows for text manipulation. 

    ```
    let str = "Hello, World!"; 
    console.log(str); // Output: Hello, World!
    ```

6. `symbol`: It represents a unique identifier that is immutable and can be used as an object property key. 

    ```
    let symbolOne = Symbol("blue");
    let symbolTwo = Symbol("blue");
    console.log(symbolOne === symbolTwo); // Output: false
    ```