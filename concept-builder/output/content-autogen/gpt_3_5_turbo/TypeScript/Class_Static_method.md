Sure, defining static methods in TypeScript is straightforward. Static methods in TypeScript are declared by the keyword `static`. They are created using the following syntax:

```typescript
class MyClass {
    static myStaticMethod() {
        // Some code here
    }
}
```

Here's an example:

```typescript
class Calculator {
    static add(x: number, y: number) {
        return x + y;
    }
}

console.log(Calculator.add(5, 3)); // Output: 8
```

In this example, we've defined a `Calculator` class with a static `add` method. We can call this static method without creating an instance of the class.

Note that we can also call static methods using class inheritance. Here's an example:

```typescript
class AdvancedCalculator extends Calculator {
    static multiply(x: number, y: number) {
        return x * y;
    }
}

console.log(AdvancedCalculator.add(5, 3)); // Output: 8
console.log(AdvancedCalculator.multiply(5, 3)); // Output: 15
```

In this example, we've created a subclass of `Calculator` called `AdvancedCalculator`. This class inherits the `add` method from its parent class, and it also defines a new static method called `multiply`. We can call both methods without creating an instance of the class.

I hope that helps! Let me know if you have any further questions.