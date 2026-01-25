In Scala, the `break` statement is not supported directly as it is in some other programming languages such as Java and C++. However, there are a few ways to implement it in Scala:

1. Using `Breaks` object:
   The `Breaks` object is a built-in Scala class that can be used to break out of a loop. Here's an example:

   ```
   import scala.util.control.Breaks._

   breakable {
     for (i <- 1 to 10) {
       if (i == 5) break else println(i)
     }
   }
   ```

   In the above example, the loop prints numbers from 1 to 4 and then the break statement inside the `breakable` block is executed which causes the loop to exit.

2. Using `return`:
   Another way to break out of a loop is by using the `return` keyword. Here's an example:

   ```
   def loop(): Unit = {
     for (i <- 1 to 10) {
       if (i == 5) return else println(i)
     }
   }

   loop()
   ```

   In this example, the loop prints numbers from 1 to 4 and then the `return` statement is executed which causes the loop and the `loop()` function to exit.

Note that using `Breaks` or `return` to break out of a loop can make your code harder to understand and maintain. It's generally better to use more functional programming approaches like `filter`, `map`, `fold`, and others to manipulate collections and iterate over them, rather than using explicit loop constructs.