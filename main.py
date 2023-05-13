import os
import requests
import json
import openaihelper as openaihelper
import yaml

def load_lang_concepts_yaml(lang_concepts_yaml_file):
    '''
    Loads the yaml file containing the language concepts
    '''
    with open(lang_concepts_yaml_file, 'r', encoding='utf-8') as stream:
        try:
            lang_concepts = yaml.safe_load(stream)
            print(lang_concepts)
        except yaml.YAMLError as exc:
            print(exc)
    return lang_concepts


def walk_lang_concepts(lang_concepts):
    """
    Walks through the dictionary of programming language concepts
    and returns a list of all the concepts

    Parameters: lang_concepts (dict): dictionary containing language concepts
    
    Returns: None
    
    """
    prog_langs  =lang_concepts['Programming Languages']


    for prog_lang in prog_langs:
        # Iterate over the items
        for concept, value in lang_concepts.items():
            if isinstance(value, list):
                # print(f'{concept}:')
                # for item in value:
                #     print(f'  - {item}')
                pass
            elif isinstance(value, dict):
                # print(f'{concept}:')
                for subconcept, prompt in value.items():
                    # print(f'  - {subkey}: {subvalue}')
                    prompt = prompt.replace('{lang}', prog_lang).strip()
                    ai_answer = ai_ask( prompt)
                    # ai_answer = "asdfabaweravasdfasd"
                    write_to_file(ai_answer,prog_lang,concept, subconcept)
            else:
                # print(f'{key}: {value}')
                pass
    



def ai_ask( prompt):
    '''ask the ai LLM a question and return the answer'''
    answer = openaihelper.request_text_chatcompletion(prompt)
    return answer

def write_to_file( ai_answer, prog_lang, concept, subconcept, llm_name='gpt-3.5-turbo'):
    '''
    Wrtite to a file . the path look slike llm_name/prog_lang/concept_subconcept.txt
    
    '''
    trans_table = str.maketrans('. -', '___')

    prog_lang_name = prog_lang.translate(trans_table)
    llm_name = llm_name.translate(trans_table)
    directory = f'{llm_name}/{prog_lang_name}/'
    file_name = f'{concept}_{subconcept}.md'
    ai_answer_sanitised = ai_answer



    # Create the directory if it does not exist
    if not os.path.exists(directory):
        os.makedirs(directory)

    # Create and write to the file
    file_path = os.path.join(directory, file_name)

    # Open the file with write permission
    with open(file_path, 'w', encoding= 'utf-8') as f:
        f.write(ai_answer_sanitised)






# answer = request_text_completion("Say this is a test!")
# answer = openaihelper.request_text_chatcompletion("Explain about primitive types in python with examples.")
# print(answer)

lang_concepts = load_lang_concepts_yaml('lang_concepts.yaml')
walk_lang_concepts(lang_concepts)



