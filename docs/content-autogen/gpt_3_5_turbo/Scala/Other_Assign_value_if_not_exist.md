In Scala, one way to assign a value if it does not exist is to use the `getOrElse` method, which is available for `Option` objects. Here is an example of how to use `getOrElse`:

```
val someValue: Option[String] = Some("existing value")
val defaultValue = "default value"
val result = someValue.getOrElse(defaultValue)
```

In this example, `someValue` is an `Option` object that contains a value, "existing value". We want to assign a value to `result` that is the value of `someValue` if it exists, or `"default value"` if it does not. 

The `getOrElse` method takes a parameter that is the default value to return if `someValue` is `None`. 

In this case, `someValue` is not `None`, so `result` is assigned the value `"existing value"`. 

If `someValue` were `None`, then `result` would be assigned the value `"default value"`.