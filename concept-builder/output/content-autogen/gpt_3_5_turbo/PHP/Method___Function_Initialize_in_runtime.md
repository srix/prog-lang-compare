In PHP, we can initialize a method or function at runtime using the "call_user_func()" function or the "call_user_func_array()" function depending on the number of arguments to be passed. 

Here are some examples:

Example 1: Using "call_user_func()"

Suppose we have a class "Calculator" with a method "addition()" that takes two parameters:

```
class Calculator {
   public function addition($num1, $num2){
      return $num1 + $num2;
   }
}
```

We can call this method at runtime using the "call_user_func()" function like this:

```
$calculator = new Calculator();
$result = call_user_func(array($calculator, 'addition'), 15, 20);
echo $result; // Output: 35
```

In the above code, we passed an array containing the object instance and the method name as the first argument to the "call_user_func()" function. The following arguments are the parameters to be passed to the method.

Example 2: Using "call_user_func_array()"

Suppose we have a function "multiply()" that takes an unknown number of parameters:

```
function multiply(...$numbers) {
   $result=1;
   foreach($numbers as $number){
      $result *= $number;
   }
   return $result;
}
```

We can call this function at runtime using the "call_user_func_array()" function like this:

```
$numbers = array(2, 3, 4, 5);
$result = call_user_func_array("multiply", $numbers);
echo $result; // Output: 120
```

In the above code, we passed the function name as the first argument to the "call_user_func_array()" function and an array containing the parameters as the second argument. The function will receive the parameters as separate arguments.

Note: The "call_user_func()" and "call_user_func_array()" functions are flexible ways to call methods or functions at runtime, but they do have performance overhead compared to direct method calls.