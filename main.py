import os
import requests
import json
import openaihelper as openaihelper
import yaml
import shutil





# def get_lang_concepts_yaml(lang_concepts_yaml_file):
#     '''
#     Loads the yaml file containing the language concepts
#     '''
#     with open(lang_concepts_yaml_file, 'r', encoding='utf-8') as stream:
#         try:
#             lang_concepts = yaml.safe_load(stream)
#             # print(lang_concepts)
#         except yaml.YAMLError as exc:
#             print(exc)
#     return lang_concepts

# def get_lang_concepts_prev_yaml(lang_concepts_prev_yaml_file):
#     '''
#     Loads the yaml file containing the language concepts
#     '''
#     with open(lang_concepts_prev_yaml_file, 'r', encoding='utf-8') as stream:
#         try:
#             lang_concepts_prev = yaml.safe_load(stream)
#             # print(lang_concepts)
#         except yaml.YAMLError as exc:
#             print(exc)
#     return lang_concepts_prev


# def get_prog_langs_yaml(prog_langs_yaml_file):
#     '''
#     Loads the yaml file containing the list of programming languages for whihc the concepts will be queried
#     '''
#     with open(prog_langs_yaml_file, 'r', encoding='utf-8') as stream:
#         try:
#             prog_langs = yaml.safe_load(stream)
#             # print(lang_concepts)
#         except yaml.YAMLError as exc:
#             print(exc)
#     return prog_langs


def load_from_yaml(yaml_file):
    '''
    Loads the yaml file containing the language concepts
    '''
    with open(yaml_file, 'r', encoding='utf-8') as stream:
        try:
            content = yaml.safe_load(stream)
            # print(lang_concepts)
        except yaml.YAMLError as exc:
            print(exc)
    return content


def is_prompt_new(lang_concepts, lang_concepts_prev, concept, subconcept, prompt):
    '''
    Checks if the prompt is new or not
    '''
    
    # status = True if lang_concepts_prev is None else False
    isnew = True

    try:
        isnew = lang_concepts[concept][subconcept] != lang_concepts_prev[concept][subconcept]
    except (ValueError, TypeError, KeyError):
        isnew = True
    
    return isnew
    
    

def walk_lang_concepts(prog_langs, lang_concepts, lang_concepts_prev):
    """
    Walks through the dictionary of programming language concepts
    and returns a list of all the concepts

    Parameters: lang_concepts (dict): dictionary containing language concepts
    
    Returns: None
    
    """

    for prog_lang in prog_langs:
        # Iterate over the items
        for concept, value in lang_concepts.items():
            if isinstance(value, dict):
                # print(f'{concept}:')
                for subconcept, prompt in value.items():
                    if is_prompt_new(lang_concepts, lang_concepts_prev, concept, subconcept, prompt) is True:
                        prompt = prompt.replace('{lang}', prog_lang).strip()
                        print(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')
                        ai_answer = ai_ask( prompt)
                        # ai_answer = "asdfabaweravasdfasd"
                        write_to_file(ai_answer,prog_lang,concept, subconcept)
                



def ai_ask( prompt):
    '''ask the ai LLM a question and return the answer'''
    answer = openaihelper.request_text_chatcompletion(prompt)
    return answer

def write_to_file( ai_answer, prog_lang, concept, subconcept, llm_name='gpt-3.5-turbo'):
    '''
    Write to a file . the path look slike llm_name/prog_lang/concept_subconcept.txt
    
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

lang_concepts = load_from_yaml('prog_lang_concepts.yaml')
prog_langs= load_from_yaml('prog_lang_list.yaml')['Programming Languages']
lang_concepts_prev = load_from_yaml('.prog_lang_concepts.prev.yaml') if os.path.exists('.prog_lang_concepts.prev.yaml') else None

walk_lang_concepts(prog_langs, lang_concepts, lang_concepts_prev)

#keep a previous of the yaml file. so next time we can ask ai only the changed prompt and concepts. Saves tokens.
shutil.copyfile('prog_lang_concepts.yaml', '.prog_lang_concepts.prev.yaml')




