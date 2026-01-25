In TypeScript, boolean is a primitive data type that represents either true or false. We can use boolean in a variety of ways in our TypeScript applications. Here are some examples:

1. Assigning a boolean value to a variable:

```
let isTrue: boolean = true;
let isFalse: boolean = false;
```

2. Using boolean values in logical expressions:

```
let isSunny: boolean = true;
let isWindy: boolean = true;

if (isSunny && isWindy) {
    console.log("It's a sunny and windy day!");
}

if (isSunny || isWindy) {
    console.log("It's a sunny or windy day!");
}

if (!isSunny) {
    console.log("It's not a sunny day!");
}
```

3. Using boolean values in functions:

```
function canVote(age: number): boolean {
    return age >= 18;
}

let age: number = 25;
if (canVote(age)) {
    console.log("You are eligible to vote!");
} else {
    console.log("You are not eligible to vote!");
}
```

4. Using boolean values in class properties and methods:

```
class Person {
    private _isMarried: boolean;

    constructor(isMarried: boolean) {
        this._isMarried = isMarried;
    }

    get isMarried(): boolean {
        return this._isMarried;
    }

    set isMarried(value: boolean) {
        this._isMarried = value;
    }

    displayMaritalStatus(): void {
        if (this.isMarried) {
            console.log("You are married!");
        } else {
            console.log("You are not married!");
        }
    }
}

let person1 = new Person(true);
let person2 = new Person(false);

person1.displayMaritalStatus(); // Output: You are married!
person2.displayMaritalStatus(); // Output: You are not married!
```