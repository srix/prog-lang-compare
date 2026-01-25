
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



    // Creating hidden concept and subconcept columns for TOC navigation
    // These are used to create filenames and for the left sidebar TOC
    columns.push(
        { title: 'concept', name: 'concept', data: 'concept', visible: false }, // hidden column
        { title: 'subconcept', name: 'subconcept', data: 'subconcept', visible: false } //hidden column
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
        let langSlug = slugify(langTitle);
        // Add link to static page in header
        let columnHeader = `<a href="concepts-ssg/${langSlug}.html" target="_blank" title="View ${langTitle} Concept Reference" style="color:inherit; text-decoration: none; border-bottom: 2px solid transparent; transition: all 0.2s;">${langTitle} <span style="font-size: 0.8em; opacity: 0.7;">↗</span></a>`;

        columns.push({ title: columnHeader, name: `${safeLangName}`, data: `${safeLangName}`, width: '50ch', visible: visibility });
    }


    // Populating the dictionary with the data
    // Creating rows with hidden concept and subconcept columns for TOC navigation
    let rows = conceptsData.map(item => ({
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

    let fileurl = 'concepts-spa/' + getSafeName(progLang) + '.json';
    let mergedContent = {};

    try {
        const response = await fetch(fileurl);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: Failed to load ${progLang}`);
        }

        const filecontent = await response.text();
        mergedContent = JSON.parse(filecontent);

        mytable.rows().every(function () {
            // Get the data for this row
            var data = this.data();

            let concept = data['concept'];
            let subconcept = data['subconcept'];
            // Update the value of the cell in the target column
            let safeProglang = getSafeName(progLang)
            let key = getSafeName(concept) + '_' + getSafeName(subconcept);

            // Create permalink to static concept page
            let langSlug = slugify(progLang);
            // Construct concept key like in python generator (Concept_SubConcept) but slugify it
            // In python generator: concept_slug = slugify(concept_key)
            let conceptKey = getSafeName(concept) + '_' + getSafeName(subconcept);
            let conceptSlug = slugify(conceptKey);
            let permalink = `concepts-ssg/${langSlug}/${conceptSlug}.html`;

            let htmlContent = marked(mergedContent[key] || '');

            // Append permalink icon if content exists
            if (htmlContent) {
                htmlContent += `
                <div style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 5px; text-align: right;">
                    <a href="${permalink}" target="_blank" class="concept-permalink" style="font-size: 12px; color: #aaa; text-decoration: none;">
                        View Page ↗
                    </a>
                </div>`;
            }

            data[safeProglang] = htmlContent;
            this.invalidate().draw();

        });

        loadedColumns.push(progLang);
    } catch (error) {
        console.error(`Failed to load ${progLang}:`, error);

        // Show error in table cells
        mytable.rows().every(function () {
            var data = this.data();
            data[getSafeName(progLang)] = `<em class="error-message">Error loading content. Please refresh the page.</em>`;
            this.invalidate().draw();
        });
    }
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
    const container = document.getElementById('allLanguages');

    // Creating toggle for each language
    for (let lang of prog_lang_list.sort()) {
        let columnTitle = lang;
        let columnName = getSafeName(lang);

        // Create a new anchor element
        let a = document.createElement('a');

        // Set the attributes
        a.setAttribute("class", "toggle-vis");
        a.setAttribute("columnname", columnName);
        a.textContent = columnTitle;

        // Mark default languages as active
        if (defaultShowLangs.includes(columnTitle)) {
            a.classList.add('active');
        }

        a.onclick = function (e) {
            e.preventDefault();

            let mytable = $('#langTable').DataTable();
            let column = mytable.column($(this).attr('columnname') + ':name');

            // Toggle the visibility
            column.visible(!column.visible());

            // Toggle active class
            this.classList.toggle('active');

            // if making visible for the first time then fetch data for subconcepts and replace the placeholder text
            if (column.visible() == true && loadedColumns.includes(columnTitle) == false) {
                loadLangConceptsInColumn('#langTable', columnTitle);
            }
        };

        container.appendChild(a);
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

    let rowIndex = 0;

    concepts.forEach(function (conceptStr, index) {




        const subconcepts = conceptsData.filter(item2 => item2.concept === conceptStr);
        const subconceptsUl = document.createElement('ul');
        subconcepts.forEach(function (item3, index) {
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

                // Remove active class from all TOC items
                document.querySelectorAll('.toggle-vis').forEach(el => {
                    el.classList.remove('active');
                });

                // Add active class to clicked item
                this.classList.add('active');

                // Get the DataTable instance
                const table = $('#langTable').DataTable();

                // Specify the row index to scroll to
                let rowIndex = $(this).attr('rowIndex');

                // Get the row node
                let rowNode = table.row(rowIndex).node();

                // Get header height dynamically (sticky header)
                const headerHeight = $('.dataTable thead th').outerHeight() || 60;

                // Scroll to the row
                $('html, body').animate({
                    scrollTop: $(rowNode).offset().top - headerHeight
                }, 500);

            };


            subconceptLi.appendChild(a);
            subconceptsUl.appendChild(subconceptLi);
        });

        const conceptli = document.createElement('li');
        conceptli.innerText += `${conceptStr}`;
        conceptsUl.appendChild(conceptli);
        conceptsUl.appendChild(subconceptsUl);
        tocDiv.appendChild(conceptsUl);


    });



}

/* ========================================
   MODERN UI ENHANCEMENTS
   ======================================== */

// Dark Mode Toggle
(function initDarkMode() {
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    const html = document.documentElement;

    // Load saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme);

    function updateIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }

    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
})();

// Mobile Menu Toggle
(function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    function toggleMenu() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
    }

    function closeMenu() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Close sidebar when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    // Close sidebar when clicking a link on mobile
    if (sidebar) {
        sidebar.addEventListener('click', function (event) {
            if (event.target.tagName === 'A' && window.innerWidth <= 768) {
                closeMenu();
            }
        });
    }
})();

// Copy to Clipboard for Code Blocks
(function initCodeCopy() {
    // Watch for code blocks being added to the page
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeType === 1) { // Element node
                    addCopyButtonsToCodeBlocks(node);
                }
            });
        });
    });

    // Start observing the table for changes
    const table = document.getElementById('langTable');
    if (table) {
        observer.observe(table, {
            childList: true,
            subtree: true
        });
    }

    function addCopyButtonsToCodeBlocks(container) {
        const codeBlocks = container.querySelectorAll('pre');

        codeBlocks.forEach(function (pre) {
            // Check if already wrapped
            let wrapper = pre.parentElement;
            const isWrapped = wrapper.classList.contains('code-block-wrapper');

            if (isWrapped) {
                // If wrapped, check if button already exists in the wrapper
                if (wrapper.querySelector('.copy-button')) {
                    return;
                }
            } else {
                // Create wrapper
                wrapper = document.createElement('div');
                wrapper.className = 'code-block-wrapper';
                pre.parentNode.insertBefore(wrapper, pre);
                wrapper.appendChild(pre);
            }

            // Create copy button
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            button.type = 'button'; // Ensure it's not a submit button
            button.setAttribute('aria-label', 'Copy code to clipboard');

            button.addEventListener('click', function (e) {
                e.preventDefault(); // Prevent any default action
                const code = pre.textContent; // Use textContent for robust checking in all envs

                // Fallback for clipboard API
                if (!navigator.clipboard) {
                    const textArea = document.createElement("textarea");
                    textArea.value = code;

                    // Prevent scrolling to bottom
                    textArea.style.top = "0";
                    textArea.style.left = "0";
                    textArea.style.position = "fixed";
                    textArea.style.opacity = "0";

                    document.body.appendChild(textArea);
                    textArea.focus({ preventScroll: true });
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        button.textContent = 'Copied!';
                    } catch (err) {
                        console.error('Fallback: Oops, unable to copy', err);
                        button.textContent = 'Failed';
                    }
                    document.body.removeChild(textArea);
                    setTimeout(function () {
                        button.textContent = 'Copy';
                    }, 2000);
                    return;
                }

                navigator.clipboard.writeText(code).then(function () {
                    button.textContent = 'Copied!';
                    setTimeout(function () {
                        button.textContent = 'Copy';
                    }, 2000);
                }).catch(function (err) {
                    console.error('Failed to copy:', err);
                    button.textContent = 'Failed';
                    setTimeout(function () {
                        button.textContent = 'Copy';
                    }, 2000);
                });
            });

            wrapper.appendChild(button);
        });
    }

    // Expose for testing
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.addCopyButtonsToCodeBlocks = addCopyButtonsToCodeBlocks;
    }

    // Initial scan for code blocks
    addCopyButtonsToCodeBlocks(document.body);
})();

// Scroll Spy - Highlight TOC item based on scroll position
(function initScrollSpy() {
    let isScrolling = false;
    let userClicked = false;
    let clickTimeout;

    function updateActiveTocItem() {
        if (userClicked) return; // Don't update during user interaction

        const table = $('#langTable').DataTable();
        if (!table || table.rows().count() === 0) return;

        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const triggerPoint = scrollTop + windowHeight / 3; // Activate when row is 1/3 down the viewport

        let activeRowIndex = -1;

        // Find which row is currently in view
        table.rows().every(function (index) {
            const rowNode = this.node();
            if (!rowNode) return;

            const rowTop = $(rowNode).offset().top;
            const rowBottom = rowTop + $(rowNode).height();

            // Check if this row is in the trigger zone
            if (rowTop <= triggerPoint && rowBottom > scrollTop) {
                activeRowIndex = index;
                return false; // Break the loop
            }
        });

        if (activeRowIndex >= 0) {
            // Remove active class from all TOC items (only in TOC sidebar)
            $('#toc a.toggle-vis').removeClass('active');

            // Add active class to the corresponding TOC item
            const tocItem = $(`#toc a.toggle-vis[rowIndex="${activeRowIndex}"]`);
            if (tocItem.length > 0) {
                tocItem.addClass('active');

                // Auto-scroll the sidebar to keep active item visible
                const sidebar = document.querySelector('.sidebar');
                const tocElement = tocItem[0];
                if (sidebar && tocElement) {
                    const sidebarRect = sidebar.getBoundingClientRect();
                    const tocRect = tocElement.getBoundingClientRect();

                    // Check if TOC item is outside visible sidebar area
                    if (tocRect.top < sidebarRect.top || tocRect.bottom > sidebarRect.bottom) {
                        tocElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }
            }
        }
    }

    // Debounce scroll events for performance
    let scrollTimeout;
    $(window).on('scroll', function () {
        if (!isScrolling) {
            isScrolling = true;
        }

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            updateActiveTocItem();
            isScrolling = false;
        }, 100); // Update every 100ms while scrolling
    });

    // Handle manual TOC clicks
    $(document).on('click', '#toc a.toggle-vis', function () {
        // Prevent auto-update for 1.5 seconds after user clicks
        userClicked = true;
        clearTimeout(clickTimeout);
        clickTimeout = setTimeout(function () {
            userClicked = false;
        }, 1500);
    });

    // Initial update after table loads
    setTimeout(updateActiveTocItem, 1000);
})();


function slugify(text) {
    text = text.replace(/_/g, '-');
    text = text.toLowerCase();
    text = text.replace(/[^\w\s-]/g, ''); // Remove non-word chars (except space and hyphen)
    text = text.replace(/[-\s]+/g, '-'); // Replace spaces and hyphens with single hyphen
    return text.replace(/^-+|-+$/g, ''); // Strip leading/trailing hyphens
}

if (typeof module !== 'undefined' && module.exports) {
    // Preserve existing exports
    module.exports = {
        ...module.exports,
        getSafeName,
        slugify
    };
}