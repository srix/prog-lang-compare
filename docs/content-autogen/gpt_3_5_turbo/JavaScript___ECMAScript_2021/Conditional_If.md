In JavaScript - ECMAScript 2021, if statements are used to make decisions in code based on a condition. The basic syntax of an if statement is as follows:

```
if(condition){
  // code to be executed if the condition is true
}
```

Here, the `condition` is an expression that can either be true or false. If the condition is true, the code inside the if statement will be executed. If the condition is false, the code inside the if statement will be skipped.

Example 1:
```
let age = 18;
if(age >= 18){
  console.log("You are an adult");
}
```
In this example, the condition is `age >= 18`. Since `age` is 18, which is greater than or equal to 18, the condition is true and the code inside the if statement will be executed. The output will be "You are an adult".


Example 2:
```
let marks = 80;
if(marks >= 90){
  console.log("Grade A");
}else if(marks >= 80){
  console.log("Grade B");
}else{
  console.log("Grade C");
}
```
In this example, there are multiple conditions using `if...else if...else` statements. If the `marks` are greater than or equal to 90, the output will be "Grade A". If the `marks` are greater than or equal to 80, the output will be "Grade B". If neither of the conditions are met, the output will be "Grade C". Since `marks` is `80` in this example, it satisfies the second condition and the output will be "Grade B".