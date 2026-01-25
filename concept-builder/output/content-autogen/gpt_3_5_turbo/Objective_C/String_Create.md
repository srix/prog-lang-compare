In Objective-C, a string can be created using the `NSString` class. 

There are various ways to create a string in Objective-C, some common examples are:

1. Creating a string with a literal:

   ```objective-c
   NSString *myString = @"Hello World";
   ```

2. Using the `stringWithFormat:` method:

   ```objective-c
   NSString *name = @"John";
   NSString *myString = [NSString stringWithFormat:@"Hello, %@!", name];
   NSLog(@"%@", myString); // outputs "Hello, John!"
   ```

3. Using the `initWithFormat:` method:

   ```objective-c
   NSString *name = @"Mary";
   NSString *myString = [[NSString alloc] initWithFormat:@"Hello, %@!", name];
   NSLog(@"%@", myString); // outputs "Hello, Mary!"
   ```

4. Concatenating strings:

   ```objective-c
   NSString *firstName = @"John";
   NSString *lastName = @"Doe";
   NSString *myString = [NSString stringWithFormat:@"%@ %@", firstName, lastName];
   NSLog(@"%@", myString); // outputs "John Doe"
   ```

5. Using a character array:

   ```objective-c
   char cString[] = "Hello World";
   NSString *myString = [NSString stringWithCString:cString encoding:NSUTF8StringEncoding];
   NSLog(@"%@", myString); // outputs "Hello World"
   ```

Note that Objective-C also supports mutable strings, which can be modified after creation using the `NSMutableString` class.