In Objective-C, a field is essentially an instance variable declared inside a class. It represents a property or attribute of a particular object of the class. Fields are sometimes also referred to as member variables, properties, or attributes.

To define a field in a class, you can declare it in the interface section of the class using the @interface and @end keywords. Here is an example:

```
@interface Car : NSObject

@property (nonatomic, strong) NSString *make;
@property (nonatomic, strong) NSString *model;
@property (nonatomic) int year;
@property (nonatomic) BOOL isElectric;

@end
```

In this example, the Car class has four fields: make, model, year, and isElectric. Each field is defined using the @property keyword, which generates getter and setter methods automatically, allowing you to access and modify the field from other parts of your code.

You can access and modify these fields within methods of the Car class or from code outside of the class by creating an object of the Car class and using the dot notation to access the field. Here is an example:

```
Car *myCar = [[Car alloc] init];
myCar.make = @"Toyota";
myCar.model = @"Camry";
myCar.year = 2018;
myCar.isElectric = NO;

NSLog(@"My car is a %@ %@ from %d and is electric: %@", myCar.make, myCar.model, myCar.year, myCar.isElectric ? @"YES" : @"NO");
```

In this example, we create an object of the Car class and set its fields. We then log a message showing the values of the fields.

Fields are a basic but essential part of object-oriented programming in languages like Objective-C. By defining and using fields in your classes, you can create more complex and useful objects that can store and manage information in a structured way.