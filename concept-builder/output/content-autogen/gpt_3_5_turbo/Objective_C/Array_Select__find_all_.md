To find all elements of an array satisfying a condition in Objective-C, you can use the `NSPredicate` class. `NSPredicate` allows you to define a condition or set of conditions that the elements of the array must meet. Here are some examples of how to apply `NSPredicate`:

Example 1: Finding all even numbers in an array of integers

```objective-c
NSArray *numbersArray = @[@1, @2, @3, @4, @5, @6]; //declare the array

NSPredicate *evenPredicate = [NSPredicate predicateWithBlock:^BOOL(NSNumber *number, NSDictionary *bindings) {
    return [number intValue] % 2 == 0; //check if the number is even
}];

NSArray *evenNumbersArray = [numbersArray filteredArrayUsingPredicate:evenPredicate];
NSLog(@"Even Numbers: %@", evenNumbersArray); //output: Even Numbers: (2, 4, 6)
```

In this example, we declare an array of numbers and then create a `NSPredicate` with a block that checks if the number is even. We apply this predicate to the `numbersArray` using the `filteredArrayUsingPredicate` method, which creates a new array of numbers that meet the condition.

Example 2: Finding all strings that contain a certain substring in an array of strings

```objective-c
NSArray *stringsArray = @[@"apple", @"banana", @"orange", @"grapefruit", @"strawberry"]; //declare the array

NSString *substring = @"an";

NSPredicate *containsSubstringPredicate = [NSPredicate predicateWithBlock:^BOOL(NSString *string, NSDictionary *bindings) {
    return [string rangeOfString:substring options:NSCaseInsensitiveSearch].location != NSNotFound; //check if the string contains the substring
}];

NSArray *stringsContainingSubstringArray = [stringsArray filteredArrayUsingPredicate:containsSubstringPredicate];
NSLog(@"Strings containing '%@': %@", substring, stringsContainingSubstringArray); //output: Strings containing 'an': (banana, orange, grapefruit)
```

In this example, we declare an array of strings and a substring to search for. We then create a `NSPredicate` with a block that checks if the string contains the substring. We apply this predicate to the `stringsArray` using the `filteredArrayUsingPredicate` method, which creates a new array of strings that meet the condition.

Conclusion: `NSPredicate` provides a flexible and powerful way to filter arrays in Objective-C based on any condition or set of conditions you need.