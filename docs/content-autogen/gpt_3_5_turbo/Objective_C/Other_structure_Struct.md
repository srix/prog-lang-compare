In Objective-C, a struct is defined using the struct keyword followed by the name of the struct and its members. A struct is a collection of variables of different data types that are grouped together into a single entity.

Here is an example of how to declare a struct in Objective-C:

```
struct person {
   NSString *name;
   int age;
   float height;
};
```

This defines the struct "person" to contain three members: "name", "age", and "height". "name" is a pointer to an NSString object, "age" is an integer, and "height" is a floating point number.

Once you have defined the struct, you can create a new instance of it like this:

```
struct person myPerson;

myPerson.name = @"John";
myPerson.age = 30;
myPerson.height = 1.80f;
```

You can access the individual members of the struct using the "." operator, like this:

```
NSLog(@"Name: %@", myPerson.name);
NSLog(@"Age: %d", myPerson.age);
NSLog(@"Height: %f", myPerson.height);
```

If you want to use a struct as a parameter to a function, you can pass it by value or by reference:

```
// Pass struct by value
void printPerson(struct person thePerson) {
   NSLog(@"Name: %@", thePerson.name);
   NSLog(@"Age: %d", thePerson.age);
   NSLog(@"Height: %f", thePerson.height);
}

// Pass struct by reference
void changePerson(struct person *thePerson, NSString *newName) {
   thePerson->name = newName;
}

// Example usage
struct person myPerson = {@"John", 30, 1.80f};

printPerson(myPerson); // prints "John", "30", and "1.80"
changePerson(&myPerson, @"Bob"); // change name to "Bob"
printPerson(myPerson); // prints "Bob", "30", and "1.80"
```

In the example above, the "printPerson" function takes a struct person argument by value, while the "changePerson" function takes a struct person parameter by reference using a pointer.