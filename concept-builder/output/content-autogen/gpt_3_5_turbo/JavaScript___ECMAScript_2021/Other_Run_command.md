In ECMAScript 2021, there are a variety of ways to run commands in JavaScript. Here are a few examples:

1. Using console.log() to print a message to the console:
```
console.log("Hello, world!");
```
This will output the message "Hello, world!" to the console.

2. Using the alert() function to display a message in a pop-up window:
```
alert("Hello, world!");
```
This will display a pop-up window with the message "Hello, world!".

3. Using a function to execute a set of commands:
```
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John");
```
This will print the message "Hello, John!" to the console.

4. Using an event listener to execute a function when an event occurs:
```
document.addEventListener("click", function() {
  console.log("You clicked the page!");
});
```
This will listen for a click on the page and execute the function, which will log the message "You clicked the page!" to the console.