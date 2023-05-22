In PHP, you can check if a class has a certain method using the `method_exists()` function. This function accepts two arguments: the class name, and the method name you want to check.

Here's an example:

```
class MyClass {
  public function myMethod() {
    // do something here
  }
}

$object = new MyClass();

if (method_exists($object, 'myMethod')) {
  echo 'MyClass has a method called myMethod.';
} else {
  echo 'MyClass does not have a method called myMethod.';
}
```

In the example above, we define a class `MyClass` with a method called `myMethod()`. We then create a new instance of `MyClass`, and use the `method_exists()` function to check if the class has a method called `myMethod()`. Since `MyClass` does have this method, the output of this code will be `'MyClass has a method called myMethod.'`.

If you want to check if a class has a static method, you can pass the class name as the first argument to `method_exists()`, instead of an instance of the class. Here's an example:

```
class MyOtherClass {
  public static function myStaticMethod() {
    // do something here
  }
}

if (method_exists('MyOtherClass', 'myStaticMethod')) {
  echo 'MyOtherClass has a static method called myStaticMethod.';
} else {
  echo 'MyOtherClass does not have a static method called myStaticMethod.';
}
```

In this example, we define a class called `MyOtherClass` with a static method called `myStaticMethod()`. We then use the `method_exists()` function to check if `MyOtherClass` has this static method. Since it does, the output of this code will be `'MyOtherClass has a static method called myStaticMethod.'`.