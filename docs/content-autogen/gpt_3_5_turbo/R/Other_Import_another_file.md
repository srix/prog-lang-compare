To import another file in R, you can use the `read.table`, `read.csv` or `read.xlsx` functions depending on the file type. Here are some examples:

1. Importing a CSV file:

```R
data <- read.csv("path/to/file.csv")
```

2. Importing a tab-delimited text file:

```R
data <- read.table("path/to/file.txt", sep="\t")
```

3. Importing an Excel file:

```R
library(readxl)
data <- read_excel("path/to/file.xlsx")
```

In all of these examples, the "path/to/file" should be replaced with the actual file path on your computer. Additionally, you can specify any additional parameters such as delimiter, encoding, header, and more to customize the import process.