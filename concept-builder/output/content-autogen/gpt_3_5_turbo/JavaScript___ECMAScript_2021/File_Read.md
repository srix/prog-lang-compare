In JavaScript, there are multiple ways to read a file, but one common way is to use the FileReader API. Here's an example of how to read a file in JavaScript - ECMAScript 2021:

```
// create a new FileReader object
const fileReader = new FileReader();

// use the readAsText method to read the contents of the file
fileReader.readAsText(file);

// handle the onload event to get the contents of the file
fileReader.onload = function() {
  const fileContent = fileReader.result;
  console.log(fileContent);
};
```

In the above code, `file` is the file object that you want to read. The `readAsText` method is used to read the contents of the file as a string. Once the contents of the file have been read, they are accessible through the `result` property of the `FileReader` object. In this example, we log the contents of the file to the console.

Additionally, it's important to note that to actually select the file, you will need to use an `<input type="file">` HTML element with a change event listener to pass the selected file to the JavaScript function:

```
<input type="file" id="fileInput" />
<script>
  const fileInput = document.getElementById('fileInput');
  fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    // read the contents of the file using the FileReader API
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function() {
      const fileContent = fileReader.result;
      console.log(fileContent);
    };
  });
</script>
```

In this example, we listen for the `change` event on the `fileInput` element and use the `files` property of the event target to get the selected file. We then pass the selected file to the `FileReader` API to read its contents.