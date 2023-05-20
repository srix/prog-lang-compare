In Java, you can compare numbers using comparison operators. The comparison operators are as follows:

- "==" (equal to)
- "!=" (not equal to)
- ">" (greater than)
- ">=" (greater than or equal to)
- "<" (less than)
- "<=" (less than or equal to)

For example, to compare the numbers 20 and 10, you can use the ">" operator like this:

```
int num1 = 20;
int num2 = 10;

if(num1 > num2){
    System.out.println("num1 is greater than num2");
}
else{
    System.out.println("num2 is greater than num1");
}
```

This code will output "num1 is greater than num2" because 20 is greater than 10.

You can also use the other comparison operators to compare the numbers. For example:

```
int num1 = 20;
int num2 = 10;

if(num1 == num2){
    System.out.println("num1 is equal to num2");
}
else if(num1 != num2){
    System.out.println("num1 is not equal to num2");
}
else if(num1 >= num2){
    System.out.println("num1 is greater than or equal to num2");
}
else if(num1 <= num2){
    System.out.println("num1 is less than or equal to num2");
}
```

This code will output "num1 is not equal to num2" because 20 is not equal to 10.