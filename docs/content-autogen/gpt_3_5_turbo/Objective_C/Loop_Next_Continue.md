In Objective-C, the `next` and `continue` statements are used within loops such as `for`, `while`, and `do-while`. 

`next` and `continue` statements are used to skip over certain iterations of the loop and move on to the next iteration.

Here’s an example of how to use `continue` statement in Objective-C:

```
for (int i = 0; i < 10; i++) {
   if (i == 5) {
      continue;
   }
   NSLog(@"Value of i = %d", i);
}
```
Output:
```
Value of i = 0
Value of i = 1
Value of i = 2
Value of i = 3
Value of i = 4
Value of i = 6
Value of i = 7
Value of i = 8
Value of i = 9
```
As you can see, when the value of `i` equals 5, the `continue` statement is executed, and the current iteration is skipped, moving on to the next iteration.

Here’s an example of how to use `next` statement in Objective-C:
```
NSArray *arr = @[@"one", @"two", @"three", @"four", @"five"];
for (NSString *str in arr) {
   if ([str isEqualToString:@"three"]) {
      next;
   }
   NSLog(@"%@", str);
}
```
Output:
```
one
two
four
five
```
In this example, when the iteration encounters the string `"three"`, the `next` statement is executed, and this iteration is skipped, moving on to the next iteration.