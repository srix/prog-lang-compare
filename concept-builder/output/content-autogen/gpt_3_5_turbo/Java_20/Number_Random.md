Random numbers can be generated in Java using the `java.util.Random` class. Here are some examples:

1. Generating a random integer between 0 and 20 inclusive:

```
import java.util.Random;

public class RandomExample {
    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(21);
        System.out.println(randomNumber);
    }
}
```

2. Generating a random double between 0.0 and 20.0:

```
import java.util.Random;

public class RandomExample {
    public static void main(String[] args) {
        Random random = new Random();
        double randomNumber = random.nextDouble() * 20.0;
        System.out.println(randomNumber);
    }
}
```

3. Generating a random long between 0 and 20 inclusive:

```
import java.util.Random;

public class RandomExample {
    public static void main(String[] args) {
        Random random = new Random();
        long randomNumber = random.nextLong() % 21;
        System.out.println(randomNumber);
    }
}
```

Note: The `%` operator computes the remainder after dividing the random long number by 21, which ensures that the result is between 0 and 20 inclusive.