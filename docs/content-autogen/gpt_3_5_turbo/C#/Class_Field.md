In C#, a field is a member variable of a class that holds data. Fields are accessed directly by the name of the field within the class. Here is an example of how to use fields in a class:

```
class Person
{
    public string name;
    public int age;
}

class Program
{
    static void Main(string[] args)
    {
        // Create a new instance of the Person class
        Person person = new Person();

        // Set the fields of the Person class
        person.name = "John Doe";
        person.age = 30;

        // Access the fields of the Person class
        Console.WriteLine("Name: " + person.name);
        Console.WriteLine("Age: " + person.age);
    }
}
```

In the code above, we created a class called `Person` with two fields, `name` and `age`. Within the `Main` method, we instantiated a new instance of the `Person` class, set the values of the fields for this instance, and then accessed the values of the fields using the dot notation. 

Fields can also have access modifiers that determine the level of visibility and accessibility of the field. Common access modifiers for fields are `public`, `private`, `protected`, and `internal`. Here is an example of a class with a private field and a public method that accesses the private field:

```
class BankAccount
{
    private decimal balance;

    public void Deposit(decimal amount)
    {
        balance += amount;
    }

    public decimal GetBalance()
    {
        return balance;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Create a new instance of the BankAccount class
        BankAccount account = new BankAccount();

        // Deposit $100 into the account
        account.Deposit(100);

        // Get the balance of the account and print it out
        Console.WriteLine("Balance: $" + account.GetBalance());
    }
}
```

In the code above, we created a class called `BankAccount` with a private `balance` field and two public methods, `Deposit` and `GetBalance` that access the `balance` field. The `Deposit` method modifies the value of the `balance` field, while the `GetBalance` method returns the value of the `balance` field. 

Note that the `balance` field has been marked as `private`, which means that it can only be accessed from within the `BankAccount` class. This provides data encapsulation and prevents the `balance` field from being modified or accessed outside of the `BankAccount` class.