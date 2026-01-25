In TypeScript, the `Date` object is used to work with dates and times. Here are some examples of using time in TypeScript:

```typescript
// Create a new Date object with the current date and time
const now = new Date();

// Get the current timestamp in milliseconds
const timestamp = now.getTime();

// Create a new Date object with a specific date and time
const date = new Date('2022-12-31T23:59:59');

// Get the year, month, day, hour, minute, and second from a Date object
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

// Format a Date object as a string
const formattedDate = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

// Calculate the difference between two dates in milliseconds
const startDate = new Date('2022-01-01');
const endDate = new Date('2022-12-31');
const difference = endDate.getTime() - startDate.getTime();

// Convert milliseconds to a more human-readable format
const msPerSecond = 1000;
const msPerMinute = msPerSecond * 60;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const days = Math.floor(difference / msPerDay);
const hours = Math.floor((difference % msPerDay) / msPerHour);
const minutes = Math.floor((difference % msPerHour) / msPerMinute);
const seconds = Math.floor((difference % msPerMinute) / msPerSecond);
const formattedTime = `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
```

These examples demonstrate various ways to work with dates and times in TypeScript, including creating a new `Date` object, getting various components of a `Date` object, formatting a `Date` object as a string, calculating the difference between two dates, and converting milliseconds to a more human-readable format.