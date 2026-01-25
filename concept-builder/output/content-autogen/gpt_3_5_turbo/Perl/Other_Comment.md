In Perl, there are two ways to add comments:

1. Single-line comments:
To insert a single-line comment in Perl, use the hash symbol #, and it applies to everything that follows it in that line only. Anything after the hash symbol will be ignored by the compiler. For example:

```
# This is a single-line comment in Perl
print("Hello, World!\n"); # This line will output "Hello, World!"
```

2. Multi-line comments:
Perl doesn't have an official syntax for multi-line comments. However, you can achieve this by using POD (Plain Old Documentation). Here is an example:

```
=pod
This is a multi-line comment in Perl using POD.
You can write all your comments here.
=cut

print("Hello, World!\n");
```

When you use POD, you start and end the comment block with "=pod" and "=cut" respectively. Everything between those two statements will be considered as a comment.

Note: The second method is not a true comment. It is actually a documentation block, but it can be used for long comments.