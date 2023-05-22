In JavaScript - ECMAScript 2021, time can be manipulated and retrieved using the built-in `Date` object. 

Here are some examples of how to use time in JavaScript - ECMAScript 2021:

**1. Creating a new date object:**

You can create a new date object in JavaScript using the `Date()` constructor. If no arguments are passed, it gives the current date and time.

```javascript
const currentDate = new Date();
console.log(currentDate);
```

Output:

```
Sat Oct 16 2021 16:08:26 GMT+0530 (India Standard Time)
```

**2. Formatting date:**

The `Date` object has various methods to get different parts of the date and time, such as `getFullYear()`, `getMonth()`, `getDate()`, `getHours()`, `getMinutes()`, `getSeconds()`, and `getMilliseconds()`.

```javascript
const currentDate = new Date();
console.log(currentDate.getFullYear()); // 2021
console.log(currentDate.getMonth()); // 9 (October, zero-based index)
console.log(currentDate.getDate()); // 16
console.log(currentDate.getHours()); // 16
console.log(currentDate.getMinutes()); // 13
console.log(currentDate.getSeconds()); // 54
console.log(currentDate.getMilliseconds()); // 907
```

**3. Parsing date and time:**

You can also parse a date and time string and create a `Date` object using the `Date.parse()` method.

```javascript
const timestamp = Date.parse("2021-10-16T16:30:00");
console.log(new Date(timestamp));
```

Output:

```
Sat Oct 16 2021 16:30:00 GMT+0530 (India Standard Time)
```

**4. Timezone manipulation**

You can also get the timezone offset of the user's computer using the `getTimezoneOffset()` method of the `Date` object. This method returns the difference between UTC and the local time zone, in minutes.

```javascript
const currentDate = new Date();
console.log(currentDate.getTimezoneOffset()); // -330 (India Standard Time)
```

**5. Time differences**

You can calculate the difference between two dates in JavaScript using the `getTime()` method. This method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

```javascript
const date1 = new Date("2021-10-16T16:00:00");
const date2 = new Date("2021-10-16T16:30:00");
const difference = date2.getTime() - date1.getTime(); // returns difference in milliseconds
console.log(difference / 60000); // 30 (divide by 60000 to get difference in minutes)
```

These are some of the examples of how to use time in JavaScript - ECMAScript 2021.