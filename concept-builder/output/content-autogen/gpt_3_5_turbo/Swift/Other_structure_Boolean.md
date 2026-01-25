Boolean is a data type in Swift that represents true or false values. 

Here's how to use boolean in Swift with some examples:

1. Declaring a Boolean variable:

   ```
   var isRaining: Bool = true
   ```

2. Comparing two values using boolean operators:

   ```
   let x: Int = 10
   let y: Int = 5
   let isGreater: Bool = x > y
   ```

3. Using boolean conditions in control structures:

   ```
   let isSunny: Bool = true

   if isSunny {
       print("It's a sunny day!")
   } else {
       print("It's a cloudy day!")
   }
   ```

4. Combining multiple boolean conditions using logical operators:

   ```
   let hasMoney: Bool = true
   let hasCreditCard: Bool = false

   if hasMoney && hasCreditCard {
       print("You can buy a product!")
   } else {
       print("You cannot buy a product!")
   }
   ```

5. Using boolean in function parameters:

   ```
   func isEven(number: Int) -> Bool {
       return number % 2 == 0
   }

   let num: Int = 10
   let isNumEven: Bool = isEven(number: num)
   ```