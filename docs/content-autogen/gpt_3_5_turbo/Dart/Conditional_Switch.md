In Dart, the switch statement is used to check for multiple conditions and execute different blocks of code based on those conditions. The general syntax of the switch statement is as follows:

```dart
switch (expression) {
  case value_1:
    // Code to be executed if expression matches value_1
    break;
  case value_2:
    // Code to be executed if expression matches value_2
    break;
  .
  .
  .
  case value_n:
    // Code to be executed if expression matches value_n
    break;
  default:
    // Code to be executed if none of the values match expression
}
```

Here, `expression` is the variable or expression being compared to the `value` cases. If the `expression` matches any of the `value` cases, the corresponding block of code is executed until the `break` statement is encountered.

Now, let's see some examples of how to use switch in Dart:

Example 1: A simple switch statement

```dart
void main() {
  int number = 2;

  switch (number) {
    case 1:
      print("The number is one");
      break;
    case 2:
      print("The number is two");
      break;
    case 3:
      print("The number is three");
      break;
    default:
      print("The number is not in the range of 1 to 3");
  }
}
```

Output: `The number is two`

Explanation: Here, we have a variable `number` which is being compared to three different cases using a switch statement. Since the value of `number` is 2, the second case is executed and the corresponding message is printed.

Example 2: Using switch with enum

```dart
enum Meal { breakfast, lunch, dinner }

void main() {
  Meal meal = Meal.lunch;

  switch (meal) {
    case Meal.breakfast:
      print("I am having breakfast");
      break;
    case Meal.lunch:
      print("I am having lunch");
      break;
    case Meal.dinner:
      print("I am having dinner");
      break;
  }
}
```

Output: `I am having lunch`

Explanation: Here, we have an enum `Meal` which has three possible values - `breakfast`, `lunch`, and `dinner`. The variable `meal` is being compared to these three values using a switch statement. Since the value of `meal` is `lunch`, the corresponding message is printed.

Example 3: Using switch with multiple cases

```dart
void main() {
  String fruit = "apple";

  switch (fruit) {
    case "apple":
    case "banana":
    case "orange":
      print("This is a fruit");
      break;
    case "carrot":
    case "broccoli":
    case "tomato":
      print("This is a vegetable");
      break;
    default:
      print("This is not a fruit or a vegetable");
  }
}
```

Output: `This is a fruit`

Explanation: Here, we have a variable `fruit` which is being compared to multiple cases using a switch statement. Since the value of `fruit` is `apple`, which is one of the possible cases, the corresponding message is printed. Note that multiple cases can be grouped together if they have the same block of code to be executed.