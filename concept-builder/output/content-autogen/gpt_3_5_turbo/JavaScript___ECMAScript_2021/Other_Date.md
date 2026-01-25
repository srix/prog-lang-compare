Working with dates in JavaScript can be done using the Date object. The Date object is built into the JavaScript language, and it can be used to work with dates and times by creating instances of the object.

Here are some examples of how you can use the Date object in JavaScript:

1. Creating a new date object:

```
const date = new Date();
```

By default, `new Date()` will create a new date object for the current date and time.

2. Setting a specific date:

```
const date = new Date('October 12, 2021');
```

This creates a new date object with the date set to October 12, 2021.

3. Getting the current date and time:

```
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
const currentDate = date.getDate();
const currentHour = date.getHours();
const currentMinute = date.getMinutes();
const currentSecond = date.getSeconds();
```

This creates a new date object for the current date and time, and then extracts the current year, month, day, hour, minute, and second.

4. Formatting dates:

```
const date = new Date('October 12, 2021');
const formattedDate = date.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
```

This formats the date as "Tuesday, October 12, 2021". You can customize the formatting by changing the options object passed to `toLocaleDateString()`.

5. Performing date arithmetic:

```
const date1 = new Date('October 12, 2021');
const date2 = new Date('October 14, 2021');
const millisecondsBetween = date2 - date1;
const daysBetween = Math.ceil(millisecondsBetween / (1000 * 60 * 60 * 24));
```

This calculates the difference in days between two dates (in this case, October 12, 2021 and October 14, 2021).

Note: ECMAScript 2021 does not introduce any new features related to dates, so these examples apply to all versions of JavaScript.