In Java, the break statement is used to jump out of a loop or switch statement. Here are some examples of how to use the break statement:

1. Using break in a for loop:
```
for(int i=0; i<10; i++){
  if(i==5){
    break;
  }
  System.out.println(i);
}
```
Output:
```
0
1
2
3
4
```
In this example, the loop will iterate through 0 to 9. When i becomes 5, the break statement is executed and the loop terminates.

2. Using break in a while loop:
```
int i=0;
while(i<10){
  if(i==5){
    break;
  }
  System.out.println(i);
  i++;
}
```
Output:
```
0
1
2
3
4
```
This is similar to the previous example, but using a while loop instead of a for loop.

3. Using break in a switch statement:
```
int option = 3;
switch(option){
  case 1:
    System.out.println("Option 1 selected");
    break;
  case 2:
    System.out.println("Option 2 selected");
    break;
  case 3:
    System.out.println("Option 3 selected");
    break;
  default:
    System.out.println("Invalid option");
}
```
Output:
```
Option 3 selected
```
In this example, the switch statement will execute the code block for case 3, and then the break statement will be executed, causing the switch statement to exit.