In Swift, `struct` is used to define a custom data type that encapsulates related properties and behaviors into a single unit. Here's an example of how to use `struct` in Swift:

```swift
struct Person {
    var firstName: String
    var lastName: String
    var age: Int
    
    func getFullName() -> String {
        return "\(firstName) \(lastName)"
    }
}

// Creating an instance of the Person struct
var person1 = Person(firstName: "John", lastName: "Doe", age: 30)

// Accessing the properties and methods of the Person struct
print(person1.firstName) // Output: John
print(person1.getFullName()) // Output: John Doe
```

In this example, we have defined a `struct` called `Person`. It has three properties (`firstName`, `lastName`, and `age`) and one method (`getFullName()`). We create an instance of the `Person` struct by passing in values for its properties. We then can access the properties and methods of the `person1` object by using dot notation. 

We can also define a `struct` with an initializer:

```swift
struct Rectangle {
    var width: Double
    var height: Double
    
    init(width: Double, height: Double) {
        self.width = width
        self.height = height
    }
    
    func getArea() -> Double {
        return width * height
    }
}

// Creating an instance of the Rectangle struct
var rectangle1 = Rectangle(width: 10, height: 5)

// Accessing the properties and methods of the Rectangle struct
print(rectangle1.width) // Output: 10
print(rectangle1.getArea()) // Output: 50.0
```

In this example, we have defined a `struct` called `Rectangle`. It has two properties (`width` and `height`) and one method (`getArea()`). We created an instance of the `Rectangle` struct using an initializer that sets the `width` and `height` properties. We then accessed the properties and method of the `rectangle1` object. 

Finally, we can also define a `mutating` method in a struct that modifies the properties of the struct:

```swift
struct BankAccount {
    var balance: Double
    
    mutating func deposit(amount: Double) {
        balance += amount
    }
    
    mutating func withdraw(amount: Double) {
        balance -= amount
    }
}

// Creating an instance of the BankAccount struct
var bankAccount1 = BankAccount(balance: 1000)

// Deposit and withdraw money from the bank account
bankAccount1.deposit(amount: 500)
bankAccount1.withdraw(amount: 200)

// Accessing the balance of the BankAccount object
print(bankAccount1.balance) // Output: 1300.0
```

In this example, we have defined a `struct` called `BankAccount` with one property (`balance`) and two `mutating` methods (`deposit()` and `withdraw()`). We created an instance of the `BankAccount` struct and then called the `deposit()` and `withdraw()` methods, which modify the `balance` property. We then accessed the `balance` property to confirm that the modifications took effect.