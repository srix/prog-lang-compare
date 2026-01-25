Converting an integer to a string in JavaScript can be achieved by using the `toString()` method which is available on the Number object. This method returns a string representing the given number with the specified radix (base). 

Here's an example:

```javascript
const num = 10;
const str = num.toString(); // convert num to a string
console.log(typeof str); // output: string
console.log(str); // output: "10"
```

In the above example, we created a variable `num` with a value of 10, and then used the `toString()` method to convert it to a string. The resulting string was then stored in the variable `str`.

Here's another example showing how to convert a number to a string with a specified radix:

```javascript
const num = 255;
const strBinary = num.toString(2); // convert num to binary string
console.log(strBinary); // output: "11111111"

const strHex = num.toString(16); // convert num to hexadecimal string
console.log(strHex); // output: "ff"
```

In the second example, we converted the number 255 to a binary string and a hexadecimal string using the `toString()` method with a specified radix. The `toString(2)` method returns the binary representation of the number, while `toString(16)` returns the hexadecimal representation.

Note that it's important to remember that the `toString()` method does not modify the original number, it only returns a new string representing the number.