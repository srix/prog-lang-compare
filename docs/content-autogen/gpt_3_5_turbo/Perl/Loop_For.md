In Perl, `for` is used to loop over a list of values or range of numbers. Here are some examples:

Looping over a list of values:
```perl
my @array = (1, 2, 3, 4);

for my $i (@array) {
  print "$i\n";
}
```
Output:
```
1
2
3
4
```

Looping over a range of numbers:
```perl
for my $i (1..5) {
  print "$i\n";
}
```
Output:
```
1
2
3
4
5
```

Looping over a range of numbers with a step of 2:
```perl
for my $i (1, 3, 5, 7, 9) {
  print "$i\n";
}
```
Output:
```
1
3
5
7
9
```

Looping over a hash:
```perl
my %hash = (a => 1, b => 2, c => 3);

for my $key (keys %hash) {
  my $value = $hash{$key};
  print "$key = $value\n";
}
```
Output:
```
a = 1
b = 2
c = 3
```

Looping over a list using the `each` function:
```perl
my %hash = (a => 1, b => 2, c => 3);

while (my ($key, $value) = each %hash) {
  print "$key = $value\n";
}
```
Output:
```
a = 1
b = 2
c = 3
```