In Perl, a closure is a subroutine that can access variables defined outside its own scope. Here is an example of a closure in Perl:

```
sub counter {
   my $count = 0;
   return sub {
      return ++$count;
   };
}

my $increment = counter();
print $increment->(); # outputs 1
print $increment->(); # outputs 2
print $increment->(); # outputs 3
```

In this example, `counter()` returns an anonymous subroutine that increments a `$count` variable and returns it. The `$count` variable is defined within the scope of `counter()`, but it is accessed by the anonymous subroutine returned by `counter()`. When the anonymous subroutine is called, it increments the `$count` variable and returns it. Each time it is called, the `$count` variable retains its value between calls due to the closure.

Another example of using closures is in building a memoizing function, which is a function that caches its results in memory to avoid recomputing them for the same input. Here is an example implementation:

```
sub memoize {
   my $func = shift;
   my %cache;
   return sub {
      my $arg = shift;
      if (exists $cache{$arg}) {
         return $cache{$arg};
      }
      my $result = $func->($arg);
      $cache{$arg} = $result;
      return $result;
   };
}

sub fibonacci {
    my $n = shift;
    if ($n < 2) {
        return $n;
    }
    return fibonacci($n - 1) + fibonacci($n - 2);
}

my $memoized_fibonacci = memoize(\&fibonacci);
print $memoized_fibonacci->(10); # outputs 55
```

In this example, `memoize()` returns an anonymous subroutine that takes an argument and calls the original function (`$func`) with that argument, storing the result in a cache hash so that subsequent calls with the same argument can be returned from cache instead of recomputing the result. The original function `fibonacci()` recursively calculates the Fibonacci number for a given input with no caching, but `memoize()` allows for its results to be cached and returned from cache for the same input.