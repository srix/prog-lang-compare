
// Use the DataTables library to create a table with search and filter functionality
$(document).ready(function() {
   

    marked.setOptions({
        highlight: function(code, lang) {
          if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(lang, code).value;
          } else {
            return hljs.highlightAuto(code).value;
          }
        }
      });
      
    let conceptsData ={}
    let progLangList =[]

    const progLangConceptsUrl = 'prog_lang_concepts.yaml';
    const progLangListUrl = 'prog_langs.yaml';

    Promise.all([
                getProgLangConcepts(progLangConceptsUrl),
                getProgLangs(progLangListUrl)
                ])
                .then(results =>
                    {
                        conceptsData = results[0];
                        progLangList = results[1];
                        showEmptyTable('#myTable',conceptsData, progLangList)
                    } );

    
});


async function getProgLangConcepts(yamlUrl) {
        conceptsData = []

        // Fetch the YAML data from the URL
    const response = await fetch(yamlUrl);

    // Check if the request was successful
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the response body as text
    const yamlText = await response.text();

    // Parse the YAML data
    const yamlData = jsyaml.safeLoad(yamlText);

    for (let concept in yamlData) {
        if (yamlData.hasOwnProperty(concept)) {
            let subObj = yamlData[concept];
            for (let subConcept in subObj) {
                if (subObj.hasOwnProperty(subConcept)) {
                    // rowHeader.push(`${key} - ${subKey}`);
                    conceptsData.push({ 'concept': `${concept}` , 
                                        'subconcept': `${subConcept}` , 
                                        'filename': `datatypes_primitives.md`});
                }
            }
        }
    }
    
    return conceptsData;
    }




async function getProgLangs(yamlUrl) {
    // Fetch the YAML data from the URL
    const response = await fetch(yamlUrl);

    // Check if the request was successful
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the response body as text
    const yamlText = await response.text();

    // Parse the YAML data
    const yamlData = jsyaml.safeLoad(yamlText);

    let progLangList =[]
    progLangList = yamlData['Programming Languages']

    return progLangList;
            
    }

async function showEmptyTable(tableId, conceptsData, prog_lang_list  ) {
   
    //Create one column for each programming language
    let columns = []
    let map = {
        '\.': '_',        
    };

    // Creating toggle for each language 
    for (let lang of prog_lang_list) {
        addLangToggle(lang,getSafeName(lang))
    }

    // Creating Concerpts, concept, subconept column definitions
    // Concepts is the visible column. 
    // concept and subconcept are hidden columns used to create filenames later
    columns.push({title: 'Concepts', name: 'Concepts', data: 'Concepts', 
                                    "createdCell": function (td, cellData, rowData, row, col) {
                                        $(td).css('font-weight', 'bold');}
                                    },   //copilot suggested this !!!
                        {title: 'concept', name: 'concept', data: 'concept', visible: false}, // hidden column
                        {title: 'subconcept', name: 'subconcept', data: 'subconcept', visible: false}, //hidden column
                        ); 

     // Creating column definitions for each language 
     for (let lang of prog_lang_list) {
        // Add a new key-value pair to each dictionary
        let safeLangName = getSafeName(lang) // if data key contains a dot, it will not work
        columns.push({title: `${lang}` , name: `${safeLangName}` ,data: `${safeLangName}` });
    }

    
    // Populating the diciotnary with the data
    //Creating a three column row temporarily
    let rows = conceptsData.map(item => ({ 'Concepts':  `${item.concept}  -  ${item.subconcept}` ,
                                            'concept': `${item.concept}` ,      
                                            'subconcept': `${item.subconcept}` }));

    // extend the row one cell at a time for each language.
    // adding a placeholder text for correspoding  to a language in the cell                                
    for (let i = 0; i < rows.length; i++) {
        for(let lang of prog_lang_list) {
            // Add a new key-value pair to each dictionary
            rows[i][getSafeName(lang)] = `Loading for ${getSafeName(lang)} ...`; //Show place holder text
        }
    }
    // console.log(rows);


    $(tableId).DataTable({
        data: rows,
        columns: columns,
        paging: false,
        order: []  //disable sorting. Maintain the cocept order in prog_lang_concepts.yaml file
        });
    showLangConceptsInColumn(tableId, "Python 3.10",conceptsData )
    showLangConceptsInColumn(tableId, "Java 20",conceptsData )
    showLangConceptsInColumn(tableId, "Rust 1.55",conceptsData )
    showLangConceptsInColumn(tableId, "Haskell",conceptsData )
   
}


async function showLangConceptsInColumn(tableId, progLang,conceptsData ) {
   
   //get column for a language
   mytable = $(tableId).DataTable();
   let columnIndex = mytable.column( progLang+':name' ).index();

   mytable.rows().every(function () {
        // Get the data for this row
        var data = this.data();

        // Update the value of the cell in the target column
        concept = data['concept'];
        subconcept = data['subconcept'];
        let safename = getSafeName(progLang)
        filepath = 'content-autogen/gpt_3_5_turbo/'+getSafeName(progLang)+'/';
        fileurl = filepath + getSafeName(concept) + '_' + getSafeName(subconcept) + '.md';
        // data[safename] = 'New Value';  // Replace 'New Value' with the new value you want to set

        fetch(fileurl)
            .then(response => response.text())
            .then(filecontent => {
                data[getSafeName(progLang)] = marked(filecontent);
                this.invalidate().draw();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });


}



function getSafeName(value) {

    const regex = /\.|\ /g;
    let newvalue = value.replace(regex, "_");
    return newvalue;
    // let regex = new RegExp(Object.keys(map).join('|'), 'g');
    // return str.replace(regex, function(matched) {
    //     return map[matched];
    // });
}

function addLangToggle(columnTitle, columnName) {
        // Create a new anchor element
    var a = document.createElement('a');

    // Set the attributes
    a.setAttribute("class", "toggle-vis");
    a.setAttribute("columnname", columnName)


    // Set the text of the anchor element
    a.textContent = columnTitle+' , ';  // Replace with your link text

    a.onclick = function (e) {
        e.preventDefault();
    
        mytable = $('#myTable').DataTable();        // Get the column API object
        var column = mytable.column($(this).attr('columnname')+':name');
    
        // Toggle the visibility
        column.visible(!column.visible());

        this.style.color = this.style.color == "grey" ? "blue" : "grey";
    };

     // Select the div with the specific class
    // var div = document.querySelector('.toggle-vis');  // Replace '.my-class' with your class
    var div = document.querySelector('#toggle');  // Replace '.my-class' with your class

    // Append the anchor element to the div
    div.appendChild(a);

}