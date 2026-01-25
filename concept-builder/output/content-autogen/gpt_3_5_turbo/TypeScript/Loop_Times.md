In TypeScript, we can use the built-in `Date` object to handle dates, times, and timestamps. The `Date` object provides several methods to work with times. Here are some examples:

1. Get the current time:

```typescript
const now = new Date(); // create a new Date object
console.log(now.getHours(), now.getMinutes(), now.getSeconds()); // output: current hours, minutes, and seconds
```

2. Set the time in a `Date` object:

```typescript
const date = new Date();
date.setHours(12); // set hours to 12 pm
date.setMinutes(30); // set minutes to 30
console.log(date.getHours(), date.getMinutes()); // output: 12 30
```

3. Compare two dates:

```typescript
const date1 = new Date('2021-01-01');
const date2 = new Date('2022-01-01');
if (date1.getTime() < date2.getTime()) {
  console.log('date1 is before date2');
} else if (date1.getTime() > date2.getTime()) {
  console.log('date1 is after date2');
} else {
  console.log('date1 is equal to date2');
}
```

4. Format a date as a string:

```typescript
const date = new Date();
const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(formattedDate); // output: current date and time in "dd/mm/yyyy hh:mm:ss" format
```

These are just a few examples of how to work with dates and times in TypeScript using the `Date` object. There are many more methods available, such as `getMilliseconds()`, `setMilliseconds()`, `getUTCDate()`, `setUTCDate()`, and so on.