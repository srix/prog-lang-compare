In Perl, `switch` is not a built-in control structure but can be implemented using `given` and `when` statements. Here’s an example of how switch can be used in Perl:

```
use feature 'switch';

my $score = 60;

given($score) {
   when($_ > 90) { print "Your grade is A\n"; }
   when($_ > 80) { print "Your grade is B\n"; }
   when($_ > 70) { print "Your grade is C\n"; }
   when($_ > 60) { print "Your grade is D\n"; }
   default { print "You failed the exam\n"; }
}
```

In this example, we determine the grade of a student based on their score. We start by using the `given` statement to give the value of `$score` to `$_`, which is the default variable for `when` statements. Then, we use a series of `when` statements to specify the conditions of each grade. Finally, we use the `default` statement to handle cases that don’t match any of the `when` conditions. 

Another example:

```
use feature 'switch';

my $fruit = "banana";

given($fruit) {
   when("apple") { print "This is an apple\n"; }
   when("orange") { print "This is an orange\n"; }
   when("banana") { print "This is a banana\n"; }
   default { print "This is not an apple, orange, or banana\n"; }
}
```

In this example, we use a `given` statement to determine the type of fruit based on the value of `$fruit`. We then use a series of `when` statements to specify the conditions of each fruit. Finally, we use the `default` statement to handle cases that don’t match any of the `when` conditions. 

It’s important to use the `break` statement to prevent multiple `when` statements from executing. The `break` statement is optional in Perl, but can be used to prevent fall-through of statements.