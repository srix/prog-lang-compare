In PHP, static methods are class-level methods that can be called using the class name without the need for object instantiation. They are typically used to perform common tasks or operations that do not depend on the object state.

Here is an example that defines a simple class `MyClass` with a static method `myStaticMethod`:

```php
class MyClass {
  public static function myStaticMethod() {
    echo "Hello, this is a static method!\n";
  }
}
```

To call the static method, you can do the following:

```php
MyClass::myStaticMethod();
```

This will output `Hello, this is a static method!`.

Note that static methods cannot access non-static properties or methods of the class, since they do not have access to the object instance. However, they can access other static properties and methods:

```php
class MyClass {
  public static $name = "John";
  public static function myStaticMethod() {
    echo "Hello, my name is " . self::$name . "!\n";
  }
}
```

In this example, the static method `myStaticMethod` uses the static property `self::$name` to output a message with the name.

To call the static method, you can do the following:

```php
MyClass::$name = "Jane"; // change the static property
MyClass::myStaticMethod(); // outputs "Hello, my name is Jane!"
```