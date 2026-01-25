In TypeScript, the `Date` object is used to work with dates and times. It is implemented as a class and provides several methods to work with dates and times. Here are some examples that demonstrate the usage of `Date` in TypeScript:

1. Creating a new date and time:

```typescript
const today: Date = new Date(); // current date and time
const christmasDay: Date = new Date(2021, 11, 25); // December 25, 2021
```

2. Getting the components of a date and time:

```typescript
const now: Date = new Date();
const year: number = now.getFullYear(); // e.g. 2021
const month: number = now.getMonth(); // e.g. 0 for January, 11 for December
const day: number = now.getDate(); // e.g. 1-31
const hours: number = now.getHours(); // e.g. 0-23
const minutes: number = now.getMinutes(); // e.g. 0-59
const seconds: number = now.getSeconds(); // e.g. 0-59
```

3. Formatting a date and time:

```typescript
const today: Date = new Date();
console.log(today.toDateString()); // e.g. "Fri Aug 20 2021"
console.log(today.toLocaleDateString()); // e.g. "8/20/2021"
console.log(today.toLocaleTimeString()); // e.g. "9:30:00 AM"
```

4. Comparing dates:

```typescript
const today: Date = new Date();
const tomorrow: Date = new Date(today);
tomorrow.setDate(today.getDate() + 1); // adding one day to today's date

if (today < tomorrow) {
  console.log("Tomorrow is after today.");
} else {
  console.log("Today is after tomorrow.");
}
```

These are some basic examples of how to use `Date` in TypeScript. There are many more methods and options available in the `Date` class that you can explore in the TypeScript documentation.