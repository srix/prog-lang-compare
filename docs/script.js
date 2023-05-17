
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

    for (let lang of prog_lang_list) {
        // Add a new key-value pair to each dictionary
        let safename = getSafeName(lang) // if data key contains a dot, it will not work
        columns.push({title: `${lang}` , name: `${safename}` ,data: `${safename}` });
    }

    // Concepts is the visible column. 
    // concept and subconcept are hidden columns used to create filenames later
    prog_lang_list.map(item => ({title: `${item}` , data: `${item}` }));
    //Insert a new column at the beginning of the table called Concepts
    columns.unshift({title: 'Concepts', name: 'Concepts', data: 'Concepts', 
                                    "createdCell": function (td, cellData, rowData, row, col) {
                                        $(td).css('font-weight', 'bold');}
                                    },   //copilot suggested this !!!
                        {title: 'concept', name: 'concept', data: 'concept', visible: false},
                        {title: 'subconcept', name: 'subconcept', data: 'subconcept', visible: false}, 
                        ); 

    //Creating a three column row temporarily
    let rows = conceptsData.map(item => ({ 'Concepts':  `${item.concept}  -  ${item.subconcept}` ,
                                            'concept': `${item.concept}` ,      
                                            'subconcept': `${item.subconcept}` }));

    for (let i = 0; i < rows.length; i++) {
        for(let lang of prog_lang_list) {
            // Add a new key-value pair to each dictionary
            let safename = getSafeName(lang)
            rows[i][safename] = `Loading for ${lang} ...`; //Show place holder text
        }
    }
    // console.log(rows);


    $(tableId).DataTable({
        data: rows,
        columns: columns
    });
    showLangConceptsInColumn(tableId, "python 3.10",conceptsData )
    showLangConceptsInColumn(tableId, "java 20",conceptsData )
    showLangConceptsInColumn(tableId, "Rust 1.55",conceptsData )
   
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