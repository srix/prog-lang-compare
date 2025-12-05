/* eslint-disable @typescript-eslint/no-explicit-any */

declare const $: any;
declare const jsyaml: any;
declare const marked: any;
declare const hljs: any;

type ConceptEntry = {
    concept: string;
    subconcept: string;
    filename: string;
};

type ProgLangList = string[];

type TableRow = {
    Concepts: string;
    concept: string;
    subconcept: string;
    [key: string]: string;
};

const loadedColumns: ProgLangList = [];
const defaultShowLangs: ProgLangList = ['Rust 1.55', 'Haskell'];
let conceptsData: ConceptEntry[] = [];
let progLangList: ProgLangList = [];

$(document).ready(() => {
    marked.setOptions({
        highlight: (code: string, lang: string) => {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            }

            return hljs.highlightAuto(code).value;
        }
    });

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
        .then(() => {
            for (const lang of defaultShowLangs) {
                loadLangConceptsInColumn('#langTable', lang);
            }
        });
});

async function getProgLangConcepts(yamlUrl: string): Promise<ConceptEntry[]> {
    const response = await fetch(yamlUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const yamlText = await response.text();
    const yamlData: any = jsyaml.safeLoad(yamlText);

    const conceptsData: ConceptEntry[] = [];

    for (const concept in yamlData) {
        if (Object.prototype.hasOwnProperty.call(yamlData, concept)) {
            const subObj = yamlData[concept];
            for (const subConcept in subObj) {
                if (Object.prototype.hasOwnProperty.call(subObj, subConcept)) {
                    conceptsData.push({
                        concept: `${concept}`,
                        subconcept: `${subConcept}`,
                        filename: 'datatypes_primitives.md'
                    });
                }
            }
        }
    }

    return conceptsData;
}

async function getProgLangs(yamlUrl: string): Promise<ProgLangList> {
    const response = await fetch(yamlUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const yamlText = await response.text();
    const yamlData: any = jsyaml.safeLoad(yamlText);

    const progLangList: ProgLangList = yamlData['Programming Languages'];

    return progLangList;
}

async function showEmptyTable(tableId: string, conceptsData: ConceptEntry[], prog_lang_list: ProgLangList): Promise<void> {
    const columns: Array<Record<string, any>> = [];

    columns.push({
        title: 'Concepts', name: 'Concepts', data: 'Concepts', width: '20ch',
        createdCell: (td: HTMLElement) => {
            $(td).css('font-weight', 'bold');
        }
    },
    { title: 'concept', name: 'concept', data: 'concept', visible: false },
    { title: 'subconcept', name: 'subconcept', data: 'subconcept', visible: false });

    for (const langTitle of prog_lang_list) {
        const safeLangName = getSafeName(langTitle);
        let visibility = false;

        if (defaultShowLangs.includes(langTitle)) {
            visibility = true;
        }

        columns.push({ title: `${langTitle}`, name: `${safeLangName}`, data: `${safeLangName}`, width: '50ch', visible: visibility });
    }

    const rows: TableRow[] = conceptsData.map(item => ({
        Concepts: `${item.concept}  -  ${item.subconcept}`,
        concept: `${item.concept}`,
        subconcept: `${item.subconcept}`
    }));

    for (const row of rows) {
        for (const lang of prog_lang_list) {
            row[getSafeName(lang)] = `Loading for ${getSafeName(lang)} ...`;
        }
    }

    $(tableId).DataTable({
        data: rows,
        columns,
        paging: false,
        autoWidth: false,
        order: []
    });
}

async function loadLangConceptsInColumnMd(tableId: string, progLang: string): Promise<void> {
    const mytable = $(tableId).DataTable();
    const columnIndex = mytable.column(`${progLang}:name`).index();

    if (columnIndex === undefined) {
        return;
    }

    mytable.rows().every(function () {
        const data: TableRow = this.data();

        const concept = data['concept'];
        const subconcept = data['subconcept'];
        const safename = getSafeName(progLang);
        const filepath = 'content-autogen/gpt_3_5_turbo/' + getSafeName(progLang) + '/';
        const fileurl = filepath + getSafeName(concept) + '_' + getSafeName(subconcept) + '.md';

        fetch(fileurl)
            .then(response => response.text())
            .then(filecontent => {
                data[safename] = marked(filecontent);
                this.invalidate().draw();
            })
            .catch((error: Error) => {
                console.error('Error:', error);
            });
    });

    loadedColumns.push(progLang);
}

async function loadLangConceptsInColumn(tableId: string, progLang: string): Promise<void> {
    const mytable = $(tableId).DataTable();
    const columnIndex = mytable.column(`${progLang}:name`).index();

    if (columnIndex === undefined) {
        return;
    }

    const fileurl = 'content-autogen/gpt_3_5_turbo/' + getSafeName(progLang) + '.json';
    let mergedContent: Record<string, string> = {};
    fetch(fileurl)
        .then(response => response.text())
        .then(filecontent => {
            mergedContent = JSON.parse(filecontent);
            mytable.rows().every(function () {
                const data: TableRow = this.data();

                const concept = data['concept'];
                const subconcept = data['subconcept'];
                const safeProglang = getSafeName(progLang);
                const key = getSafeName(concept) + '_' + getSafeName(subconcept);
                data[safeProglang] = marked(mergedContent[key]);
                this.invalidate().draw();
            });

            loadedColumns.push(progLang);
        })
        .catch((error: Error) => {
            console.error('Error:', error);
        });
}

function getSafeName(value: string): string {
    const regex = /[&\/\\, +()$~%.'":*?<>{}-]/g;
    const newvalue = value.replace(regex, '_');
    return newvalue;
}

function addLangToggle(prog_lang_list: ProgLangList): void {
    for (const lang of prog_lang_list.sort()) {
        const columnTitle = lang;
        const columnName = getSafeName(lang);

        const a = document.createElement('a');

        a.setAttribute('class', 'toggle-vis');
        a.setAttribute('columnname', columnName);

        a.textContent = columnTitle + ' , ';

        if (defaultShowLangs.includes(columnTitle)) {
            a.style.color = 'blue';
        }
        else {
            a.style.color = 'grey';
        }

        a.onclick = function (e) {
            e.preventDefault();

            const mytable = $('#langTable').DataTable();
            const column = mytable.column($(this).attr('columnname') + ':name');

            column.visible(!column.visible());

            this.style.color = this.style.color === 'grey' ? 'blue' : 'grey';

            if (column.visible() === true && loadedColumns.includes(columnTitle) === false) {
                loadLangConceptsInColumn('#langTable', columnTitle);
            }
        };

        const div = document.querySelector('#toggle');
        if (div) {
            div.appendChild(a);
        }
    }
}

function addTocHtml(conceptsData: ConceptEntry[]): void {
    const tocDiv = document.getElementById('toc');

    if (!tocDiv) {
        return;
    }

    const concepts = [...new Set(conceptsData.map(item => item.concept))];
    const conceptsUl = document.createElement('ul');

    let rowIndex = 0;

    concepts.forEach(conceptStr => {
        const subconcepts = conceptsData.filter(item2 => item2.concept === conceptStr);
        const subconceptsUl = document.createElement('ul');
        subconcepts.forEach(item3 => {
            const subconceptLi = document.createElement('li');
            const a = document.createElement('a');
            a.innerText = item3.subconcept;
            a.setAttribute('class', 'toggle-vis');
            a.setAttribute('rowIndex', rowIndex.toString());
            rowIndex += 1;

            a.onclick = function (e) {
                e.preventDefault();

                const table = $('#langTable').DataTable();
                const rowIndexValue = $(this).attr('rowIndex');
                const rowNode = table.row(rowIndexValue).node();

                $('html, body').animate({
                    scrollTop: $(rowNode).offset().top
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

