// Define your data
const data = [
    {
        Concepts: "datatypes.primitives",
        'Python 3.10': "This is a paragraph.\n\n- List item 1\n- List item 2\n- List item 3"
    },
    {
        Concepts: "String.Create",
        'Python 3.10': "Another paragraph.\n\n1. Numbered list item 1\n2. Numbered list item 2"
    }
];


// Use the DataTables library to create a table with search and filter functionality
$(document).ready(function() {
    $('#myTable').DataTable({
        data: data,
        columns: [
            { data: 'Concepts' },
            { data: 'Python 3.10' },
            { data: 'Java 20' }
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
      
      fetch('content-autogen/gpt_3_5_turbo/python_3_10/datatypes_primitives.md')
      .then(response => response.text())
      .then(filecontent => {
          // `data` contains the content of the markdown file
          // console.log(filecontent);
          let table = $('#myTable').DataTable();
          let cell =  table.cell(0, 1);
          cell.data(marked(filecontent));
          cell.invalidate().draw();
      })
      .catch((error) => {
          console.error('Error:', error);
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
    
    fetch('content-autogen/gpt_3_5_turbo/java_20/datatypes_primitives.md')
    .then(response => response.text())
    .then(filecontent => {
        // `data` contains the content of the markdown file
        // console.log(filecontent);
        let table = $('#myTable').DataTable();
        let cell =  table.cell(0, 2);
        cell.data(marked(filecontent));
        cell.invalidate().draw();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    

    fetch('content-autogen/gpt_3_5_turbo/java_20/String_Create.md')
    .then(response => response.text())
    .then(filecontent => {
        // `data` contains the content of the markdown file
        // console.log(filecontent);
        let table = $('#myTable').DataTable();
        let cell =  table.cell(1, 2);
        cell.data(marked(filecontent));
        cell.invalidate().draw();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    

    // loadRowHeadersFromYaml('content-autogen/gpt_3_5_turbo/prog_lang_list.yaml', '#myTable');

});


async function loadRowHeadersFromYaml(yamlUrl, tableId) {
    // Fetch the YAML file
    const response = await fetch(yamlUrl);
    const yamlText = await response.text();
  
    // Parse the YAML file
    const yamlData = jsyaml.load(yamlText);
  
    // Assume yamlData is an array and extract the headers
    // const headers = yamlData['Programming Languages'].map(item => item.value); // Replace 'value' with your actual key
    const headers = yamlData['Programming Languages']
  
    // Create the header row in the table
    let thead = $(tableId).children('thead');
    if (!thead.length) {
        thead = $('<thead>').appendTo(tableId);
    }
    let tr = $('<tr>').appendTo(thead);
    headers.forEach(header => {
        $('<th>').text(header).appendTo(tr);
    });
  
    // Initialize the DataTable
    $(tableId).DataTable();
}

