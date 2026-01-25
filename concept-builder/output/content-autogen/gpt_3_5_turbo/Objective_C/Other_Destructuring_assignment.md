Destructuring assignment is not a feature of Objective-C. It is a feature found in languages such as JavaScript, Python, and Ruby. 

In Objective-C, you can use a similar technique to extract specific values from an NSArray or NSDictionary object.

For example, consider the following NSDictionary object:

```objective-c
NSDictionary *person = @{@"name": @"John Doe", @"age": @30, @"city": @"New York"};
```

If we want to extract the "name" and "age" values from this dictionary, we can do so using the following code:

```objective-c
NSString *name = [person objectForKey:@"name"];
NSNumber *age = [person objectForKey:@"age"];
```

In this case, we are using the `objectForKey:` method to extract the values we are interested in. We can then assign these values to variables that we can use later in our code.

Note that there is no equivalent to destructuring assignment in Objective-C, but the technique shown above can be used to achieve a similar result.