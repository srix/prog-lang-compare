R programming language provides several libraries that contain pre-existing functions to make programming tasks more efficient. To import a library in R, you can use the `library()` or `require()` function. Here are some examples:

```
# Using library() function
library(dplyr)          # loads the dplyr package
library(ggplot2)        # loads the ggplot2 package

# Using require() function
require(lubridate)      # loads the lubridate package
require(tidyr)          # loads the tidyr package
```

Note that the `require()` function returns a Boolean value indicating whether the package was successfully loaded (`TRUE`) or not (`FALSE`). On the other hand, the `library()` function does not return a value.

Once the libraries are imported, you can use their functions in your R code. For example:

```
# Using functions from dplyr package
df <- iris %>% 
  group_by(Species) %>% 
  summarize(mean_sepal_length = mean(Sepal.Length),
            mean_sepal_width = mean(Sepal.Width))

# Using functions from ggplot2 package
ggplot(df, aes(x = Species, y = mean_sepal_length)) +
  geom_bar(stat = "identity", fill = "blue")
```