In Haskell, instance variables can be accessed in private methods through the use of getter functions. These getter functions need to be defined within the same class as the instance variable, but outside the private method.

Here is an example:

```haskell
class MyClass myVar where
  _myVar :: myVar -> Int
  privateMethod :: myVar -> Int
  privateMethod obj = (_myVar obj) * 2
```

In this example, `myVar` is the class and `_myVar` is the getter function for the instance variable. The `privateMethod` takes an object of type `myVar` as argument, and returns the instance variable multiplied by 2. 

It is worth mentioning that, in Haskell, there is no real concept of private or public methods. However, we can use the `privateMethod` convention to indicate that a certain method should be hidden from the users of the class (hence, making it "private"), but still accessible by  other methods within the same class.