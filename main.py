import os
import requests
import json
import openaihelper as openaihelper
import yaml
import shutil
from concurrent.futures import ThreadPoolExecutor
import logging
import datetime
import time

from tenacity import (
    retry,
    stop_after_attempt,
    wait_random_exponential,
    after_log
)  # for exponential backoff
 

# Configure logging
now = datetime.datetime.now()
now_str = now.strftime("%Y-%m-%d_%H-%M-%S")
logging.basicConfig(filename=f'plc_{now_str}.log', level=logging.INFO,
                    format='%(asctime)s [%(levelname)s] %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S:%f',filemode = 'w')
logger = logging.getLogger(__name__)

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
    
  
                
def collect_lang_concept_params(prog_langs, lang_concepts, lang_concepts_prev):
    """
    Walks through the dictionary of programming language concepts
    and returns a list of all the concepts

    Parameters: lang_concepts (dict): dictionary containing language concepts
    
    Returns: None
    
    """
    logger.info('Collecting all prompts to ask in parallel')

    concurrent_params = []
    for prog_lang in prog_langs:
        # Iterate over the items
        for concept, value in lang_concepts.items():
            if isinstance(value, dict):
                # print(f'{concept}:')
                for subconcept, prompt in value.items():
                    if is_prompt_new(lang_concepts, lang_concepts_prev, concept, subconcept, prompt) is True:
                        prompt = prompt.replace('{lang}', prog_lang).strip()
                        logger.info(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')
                        concurrent_params.append({'prompt':prompt, 'prog_lang':prog_lang,'concept':concept, 'subconcept':subconcept, 'prompt':prompt})  
    
    return concurrent_params

def ai_ask_write_concurrently( concurrent_params):
    if len(concurrent_params) > 0:
        logger.info('Starting parallel execution')
        with ThreadPoolExecutor() as executor:
            ai_answers = executor.map(ai_ask_write, concurrent_params)  

def ai_ask_write(params):
    prompt = params['prompt']
    prog_lang =  params['prog_lang']
    concept = params['concept']
    subconcept = params['subconcept']

    ai_answer = openaihelper.ai_ask( prompt)
    write_to_file(ai_answer,prog_lang,concept,subconcept)
    logger.info(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')




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
    keep a previous of the yaml file. 
    so next time we can ask ai only the changed prompt and concepts. 
    Saves tokens.
    '''
    shutil.copyfile('prog_lang_concepts.yaml', '.prog_lang_concepts.prev.yaml')



lang_concepts = load_from_yaml('prog_lang_concepts.yaml')
prog_langs= load_from_yaml('prog_lang_list.yaml')['Programming Languages']
lang_concepts_prev = load_from_yaml('.prog_lang_concepts.prev.yaml') if os.path.exists('.prog_lang_concepts.prev.yaml') else None

# walk_lang_concepts(prog_langs, lang_concepts, lang_concepts_prev)
concurrent_params =  collect_lang_concept_params(prog_langs, lang_concepts, lang_concepts_prev)
ai_ask_write_concurrently(concurrent_params)
keep_prev_state()





