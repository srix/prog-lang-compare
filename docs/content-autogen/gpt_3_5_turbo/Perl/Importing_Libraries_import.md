In Perl, libraries are referred to as modules. To import a module, we use the `use` keyword followed by the name of the module.

Here is an example of importing the `Time::Piece` module:

```perl
use Time::Piece;
```

We can also import specific functions or variables from a module using the `import` function:

```perl
use Time::Piece qw(strftime);
```

This imports the `strftime` function from the `Time::Piece` module. 

It is also possible to import functions or variables from a module with a different name:

```perl
use Time::Piece qw(strftime asctime => $my_time);
```

This imports the `strftime` function from the `Time::Piece` module and the `asctime` variable as `$my_time`.

Additionally, we can use the `require()` function to load modules only on demand:

```perl
require Time::Piece;
```

This will only load the `Time::Piece` module when it's actually needed.

Note: It's important to use proper capitalization when importing modules, as Perl is case-sensitive. 

Overall, importing modules in Perl is a straightforward process that allows us to leverage pre-built code to accomplish our tasks more efficiently.