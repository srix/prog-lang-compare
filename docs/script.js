// Define your data
const data = [
    {
        title: "First",
        content: "This is a paragraph.\n\n- List item 1\n- List item 2\n- List item 3"
    },
    {
        title: "Second",
        content: "Another paragraph.\n\n1. Numbered list item 1\n2. Numbered list item 2"
    }
];

// Use the `marked` library to parse markdown into HTML
for (let i = 0; i < data.length; i++) {
    data[i].content = marked(data[i].content);
}

// Use the DataTables library to create a table with search and filter functionality
$(document).ready(function() {
    $('#myTable').DataTable({
        data: data,
        columns: [
            { data: 'title' },
            { data: 'content' }
        ]
    });

    marked.setOptions({
        highlight: function(code, lang) {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
        }
      });
      

    fetch('content-autogen/gpt_3_5_turbo/python_3_10/String_Create.md')
    .then(response => response.text())
    .then(filecontent => {
        // `data` contains the content of the markdown file
        // console.log(filecontent);
        let table = $('#myTable').DataTable();
        let cell =  table.cell(1, 1);
        cell.data(marked(filecontent));
        cell.invalidate().draw();


    })
    .catch((error) => {
        console.error('Error:', error);
    });
    

});


