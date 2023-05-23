import os
import requests
import json
import time
import openaihelper as openaihelper
from concurrent.futures import ThreadPoolExecutor
import logging
import datetime
import helper as helper
import plccache as plccache

from tenacity import (
    retry,
    stop_after_attempt,
    wait_random_exponential,
    after_log
)  # for exponential backoff
 

# Configure logging
now = datetime.datetime.now()
now_str = now.strftime("%Y-%m-%d_%H-%M-%S")
logging.basicConfig(filename=f'logs/plc_{now_str}.log', level=logging.INFO,
                    format='%(asctime)s [%(levelname)s] %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S:%f',filemode = 'w')
logger = logging.getLogger(__name__)




    
  
                
def collect_lang_concept_params(prog_langs, lang_concepts):
    """
    Walks through the dictionary of programming language concepts
    and returns a list of all the concepts

    Parameters: lang_concepts (dict): dictionary containing language concepts
    
    Returns: None
    
    """
    logger.info('Collecting all prompts to ask in parallel')

    concurrent_params = []
    for prog_lang in prog_langs:
        plccache.load(lang_concepts,  prog_lang)
        # Iterate over the items
        for concept, value in lang_concepts.items():
            if isinstance(value, dict):
                # print(f'{concept}:')
                for subconcept, prompt in value.items():
                    prompt = prompt.replace('{lang}', prog_lang).strip()
                    if plccache.is_cache_exist( prog_lang,concept, subconcept) is False:
                        logger.info(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')
                        concurrent_params.append({'prompt':prompt, 'prog_lang':prog_lang,'concept':concept, 'subconcept':subconcept, 'prompt':prompt})  
    
    return concurrent_params

def ai_ask_write_concurrently( concurrent_params):
    if len(concurrent_params) > 0:
        logger.info('Starting parallel execution')
        with ThreadPoolExecutor() as executor:
            ai_answers = executor.map(ai_ask_write, concurrent_params)  
    else:
        logger.info('Looks like no recent changes were made to concepts or language file')

def ai_ask_write(params):
    prompt = params['prompt']
    prog_lang =  params['prog_lang']
    concept = params['concept']
    subconcept = params['subconcept']

    ai_answer = openaihelper.ai_ask( prompt)
    write_to_file(ai_answer,prog_lang,concept,subconcept)
    plccache.update( prog_lang, concept, subconcept)
    # logger.info(f'{prog_lang} - "{concept}"."{subconcept}" Prompt: {prompt}')




def write_to_file( ai_answer, prog_lang, concept, subconcept, llm_name='gpt-3.5-turbo'):
    '''
    Write to a file . the path look slike llm_name/prog_lang/concept_subconcept.txt
    
    '''
    prog_lang_name = helper.get_safename(prog_lang)
    llm_name = helper.get_safename(llm_name)
    directory = f'docs/content-autogen/{llm_name}/{prog_lang_name}/'
    file_name = f'{helper.get_safename(concept)}_{helper.get_safename(subconcept)}.md'
    ai_answer_sanitised = ai_answer



    # Create the directory if it does not exist
    if not os.path.exists(directory):
        os.makedirs(directory)

    # Create and write to the file
    file_path = os.path.join(directory, file_name)

    # Open the file with write permission
    with open(file_path, 'w', encoding= 'utf-8') as f:
        f.write(ai_answer_sanitised)
        logger.info(f'{prog_lang} - "{concept}"-"{subconcept}" Filename: {file_name}')



start_time = time.time()  # save start time

PROG_LANG_CONCEPTS_PATH = 'docs/prog_lang_concepts.yaml'
PROG_LANGS_PATH = 'docs/prog_langs.yaml'
lang_concepts = helper.load_from_yaml(PROG_LANG_CONCEPTS_PATH)
prog_langs= helper.load_from_yaml(PROG_LANGS_PATH)['Programming Languages']

concurrent_params =  collect_lang_concept_params(prog_langs, lang_concepts)
ai_ask_write_concurrently(concurrent_params)

end_time = time.time()  # save end time
total_time = end_time - start_time  # calculate total time
logger.info(f"Total execution time: {total_time} seconds")




