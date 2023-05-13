import os
import requests
import json
import openaihelper as openaihelper
import yaml
import shutil
from concurrent.futures import ThreadPoolExecutor
import logging
import datetime



# Configure logging
now = datetime.datetime.now()
now_str = now.strftime("%Y-%m-%d_%H-%M-%S")
logging.basicConfig(filename=f'proglangcompare_{now_str}.log', level=logging.INFO,
                    format='%(asctime)s [%(levelname)s] %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S:%f')


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
                        logging.info(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')
                        ai_answer = ai_ask( prompt)
                        write_to_file(ai_answer,prog_lang,concept, subconcept)
                
def walk_lang_concepts_conc(prog_langs, lang_concepts, lang_concepts_prev):
    """
    Walks through the dictionary of programming language concepts
    and returns a list of all the concepts

    Parameters: lang_concepts (dict): dictionary containing language concepts
    
    Returns: None
    
    """
    logging.info(f'Collecting all prompts to ask in parallel')

    concurrent_params = []
    for prog_lang in prog_langs:
        # Iterate over the items
        for concept, value in lang_concepts.items():
            if isinstance(value, dict):
                # print(f'{concept}:')
                for subconcept, prompt in value.items():
                    if is_prompt_new(lang_concepts, lang_concepts_prev, concept, subconcept, prompt) is True:
                        prompt = prompt.replace('{lang}', prog_lang).strip()
                        logging.info(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')
                        concurrent_params.append({'prompt':prompt, 'prog_lang':prog_lang,'concept':concept, 'subconcept':subconcept, 'prompt':prompt})  
                        # ai_answer = ai_ask( prompt)
                        # write_to_file(ai_answer,prog_lang,concept, subconcept)
    
    if len(concurrent_params) > 0:
        logging.info(f'Starting parallel execution')
        with ThreadPoolExecutor() as executor:
            ai_answer = executor.map(ai_ask_write, concurrent_params)  


def ai_ask_write( concurrent_params):
    prompt = concurrent_params['prompt']
    prog_lang =  concurrent_params['prog_lang']
    concept = concurrent_params['concept']
    subconcept = concurrent_params['subconcept']

    ai_answer = ai_ask( prompt)
    write_to_file(ai_answer,prog_lang,concept,subconcept)
    logging.info(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')



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


def keep_prev_state():
    '''
    keep a previous of the yaml file. so next time we can ask ai only the changed prompt and concepts. 
    Saves tokens.
    '''
    shutil.copyfile('prog_lang_concepts.yaml', '.prog_lang_concepts.prev.yaml')



# answer = request_text_completion("Say this is a test!")
# answer = openaihelper.request_text_chatcompletion("Explain about primitive types in python with examples.")
# print(answer)

lang_concepts = load_from_yaml('prog_lang_concepts.yaml')
prog_langs= load_from_yaml('prog_lang_list.yaml')['Programming Languages']
lang_concepts_prev = load_from_yaml('.prog_lang_concepts.prev.yaml') if os.path.exists('.prog_lang_concepts.prev.yaml') else None

# walk_lang_concepts(prog_langs, lang_concepts, lang_concepts_prev)
walk_lang_concepts_conc(prog_langs, lang_concepts, lang_concepts_prev)
keep_prev_state()





