
// Create an array to track visibility states of column
var loadedColumns = [];
var defaultShowLangs = ['Rust 1.55', 'Haskell'];

// Use the DataTables library to create a table with search and filter functionality
$(document).ready(function () {


    marked.setOptions({
        highlight: function (code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            } else {
                return hljs.highlightAuto(code).value;
            }
        }
    });

    let conceptsData = {}
    let progLangList = []

    const progLangConceptsUrl = 'prog_lang_concepts.yaml';
    const progLangListUrl = 'prog_langs.yaml';

    Promise.all([
        getProgLangConcepts(progLangConceptsUrl),
        getProgLangs(progLangListUrl)
    ])
        .then(results => {
            conceptsData = results[0];
            progLangList = results[1];
            showEmptyTable('#langTable', conceptsData, progLangList);
            addLangToggle(progLangList);
            addTocHtml(conceptsData);
        })
        .then(results => {
            for (let i in defaultShowLangs) {
                loadLangConceptsInColumn('#langTable', defaultShowLangs[i], conceptsData);
            }
        });
});

/**
 * fetches the concepts data from the yaml file and returns a dictionary
 * @param {*} yamlUrl
 * @return {dictionary} dictionary of concept, subconcept and prompt
 */
async function getProgLangConcepts(yamlUrl) {
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

    let conceptsData = []

    for (let concept in yamlData) {
        if (yamlData.hasOwnProperty(concept)) {
            let subObj = yamlData[concept];
            for (let subConcept in subObj) {
                if (subObj.hasOwnProperty(subConcept)) {
                    // rowHeader.push(`${key} - ${subKey}`);
                    conceptsData.push({
                        'concept': `${concept}`,
                        'subconcept': `${subConcept}`,
                        'filename': `datatypes_primitives.md`,
                    });
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

    let progLangList = []
    progLangList = yamlData['Programming Languages']

    return progLangList;

}

async function showEmptyTable(tableId, conceptsData, prog_lang_list) {

    //Create one column for each programming language
    let columns = []
    let map = {
        '\.': '_',
    };



    // Creating Concerpts, concept, subconept column definitions
    // Concepts is the visible column. 
    // concept and subconcept are hidden columns used to create filenames later
    columns.push({
        title: 'Concepts', name: 'Concepts', data: 'Concepts', width: '20ch',
        "createdCell": function (td, cellData, rowData, row, col) {
            $(td).css('font-weight', 'bold');
        }
    },   //copilot suggested this !!!
        { title: 'concept', name: 'concept', data: 'concept', visible: false }, // hidden column
        { title: 'subconcept', name: 'subconcept', data: 'subconcept', visible: false }, //hidden column
    );



    // Creating column definitions for each language 
    for (let langTitle of prog_lang_list) {
        // Add a new key-value pair to each dictionary
        let safeLangName = getSafeName(langTitle) // if data key contains a dot, it will not work
        let visibility = false;
        // default columns to show
        if (defaultShowLangs.includes(langTitle)) {
            visibility = true;
        }
        columns.push({ title: `${langTitle}`, name: `${safeLangName}`, data: `${safeLangName}`, width: '50ch', visible: visibility });
    }


    // Populating the diciotnary with the data
    //Creating a three column row temporarily
    let rows = conceptsData.map(item => ({
        'Concepts': `${item.concept}  -  ${item.subconcept}`,
        'concept': `${item.concept}`,
        'subconcept': `${item.subconcept}`
    }));

    // extend the row one cell at a time for each language.
    // adding a placeholder text for correspoding  to a language in the cell                                
    for (let i = 0; i < rows.length; i++) {
        for (let lang of prog_lang_list) {
            // Add a new key-value pair to each dictionary
            rows[i][getSafeName(lang)] = `Loading for ${getSafeName(lang)} ...`; //Show place holder text
        }
    }
    // console.log(rows);


    $(tableId).DataTable({
        data: rows,
        columns: columns,
        paging: false,
        autoWidth: false,

        order: []  //disable sorting. Maintain the cocept order in prog_lang_concepts.yaml file
    });


}


async function loadLangConceptsInColumnMd(tableId, progLang) {

    //get column for a language
    let mytable = $(tableId).DataTable();
    let columnIndex = mytable.column(progLang + ':name').index();

    mytable.rows().every(function () {
        // Get the data for this row
        var data = this.data();

        // Update the value of the cell in the target column
        let concept = data['concept'];
        let subconcept = data['subconcept'];
        let safename = getSafeName(progLang)
        filepath = 'content-autogen/gpt_3_5_turbo/' + getSafeName(progLang) + '/';
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

    loadedColumns.push(progLang);

}

async function loadLangConceptsInColumn(tableId, progLang) {

    //get column for a language
    let mytable = $(tableId).DataTable();
    let columnIndex = mytable.column(progLang + ':name').index();

    let fileurl = 'content-autogen/gpt_3_5_turbo/' + getSafeName(progLang) + '.json';
    let mergedContent = {};
    fetch(fileurl)
        .then(response => response.text())
        .then(filecontent => {
            mergedContent = JSON.parse(filecontent);
            mytable.rows().every(function () {
                // Get the data for this row
                var data = this.data();

                let concept = data['concept'];
                let subconcept = data['subconcept'];
                // Update the value of the cell in the target column
                let safeProglang = getSafeName(progLang)
                let key = getSafeName(concept) + '_' + getSafeName(subconcept);
                data[safeProglang] = marked(mergedContent[key]);
                this.invalidate().draw();

            });

            loadedColumns.push(progLang);
        })
        .catch((error) => {
            console.error('Error:', error);
        });



}

function getSafeName(value) {

    // const regex = /[&\/\\#, +()$~%.'":*?<>{}]/g;
    const regex = /[&\/\\, +()$~%.'":*?<>{}-]/g;
    // const regex = /\.|\ |-|\?|\(|\)|\/|\\|/g;
    let newvalue = value.replace(regex, "_");
    return newvalue;
    // let regex = new RegExp(Object.keys(map).join('|'), 'g');
    // return str.replace(regex, function(matched) {
    //     return map[matched];
    // });
}

function addLangToggle(prog_lang_list) {

    // Creating toggle for each language 
    for (let lang of prog_lang_list.sort()) {
        let columnTitle = lang;
        let columnName = getSafeName(lang);


        // Create a new anchor element
        let a = document.createElement('a');

        // Set the attributes
        a.setAttribute("class", "toggle-vis");
        a.setAttribute("columnname", columnName)

        // Set the text of the anchor element
        a.textContent = columnTitle + ' , ';

        if (defaultShowLangs.includes(columnTitle)) {
            a.style.color = "blue";
        }
        else {
            a.style.color = "grey";
        }


        a.onclick = function (e) {
            e.preventDefault();

            let mytable = $('#langTable').DataTable();        // Get the column API object
            let column = mytable.column($(this).attr('columnname') + ':name');

            // Toggle the visibility
            column.visible(!column.visible());

            this.style.color = this.style.color == "grey" ? "blue" : "grey";


            // if making visible fo rthe first time then fetch data for subconcepts and replace the placeholder text
            if (column.visible() == true && loadedColumns.includes(columnTitle) == false) {
                loadLangConceptsInColumn('#langTable', columnTitle);
            }

        };

        // Select the div with the specific class
        // var div = document.querySelector('.toggle-vis'); 
        var div = document.querySelector('#toggle');

        // Append the anchor element to the div
        div.appendChild(a);
    }

}

function addTocHtml(conceptsData) {
    let html = '<ul>';
    const tocDiv = document.getElementById('toc');

    // let prevConcept = '';
    // const concepts = document.createElement('ul');
    // let subconcepts = null;


    const concepts = [...new Set(conceptsData.map(item => item.concept))];
    const conceptsUl = document.createElement('ul');

    let rowIndex =0;

    concepts.forEach(function(conceptStr, index) {

        
            

            const subconcepts = conceptsData.filter(item2 => item2.concept === conceptStr);
            const subconceptsUl = document.createElement('ul');
            subconcepts.forEach(function(item3, index) {
                const subconceptLi = document.createElement('li');
                // subconceptLi.textContent = 'sc';
                const a = document.createElement('a');
                // a.href = '#';
                a.innerText = item3.subconcept;
                a.setAttribute("class", "toggle-vis");
                a.setAttribute("rowIndex", rowIndex);
                rowIndex += 1;

        
                a.onclick = function (e) {
                    e.preventDefault();
        
                    // Get the DataTable instance
                    const table = $('#langTable').DataTable();
                    
                    // Specify the row index to scroll to
                    let rowIndex = $(this).attr('rowIndex');

                    // Get the row node
                    let rowNode = table.row(rowIndex).node();

                    // Scroll to the row
                    $('html, body').animate({
                        scrollTop: $(rowNode).offset().top
                    }, 500);
        
                };

                
                subconceptLi.appendChild(a);
                subconceptsUl.appendChild(subconceptLi);
            });

            const conceptli = document.createElement('li');
            conceptli.innerText += `${conceptStr}` ;
            conceptsUl.appendChild(conceptli);
            conceptsUl.appendChild(subconceptsUl);
            tocDiv.appendChild(conceptsUl);

        
    });


   
}