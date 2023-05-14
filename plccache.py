import os
import helper

cache ={}
lang_concepts = {}

def is_cache_exist(prog_lang, concept, subconcept):
    '''
    Checks if the prompt is new or not
    '''
    
    is_exist = False

    try:
        if lang_concepts[concept][subconcept] == cache[concept][subconcept]:
            is_exist = True
    except (ValueError, TypeError, KeyError):
        is_exist = False
    
    return is_exist

# def update()

def update( prog_lang, concept, subconcept):
    global cache
    subconcept_proglang = f'{subconcept}-proglangs'
    mycache = {} if cache is None else cache
    mycache[concept] = {} if concept not in mycache.keys() else mycache[concept]
    mycache[concept][subconcept] = lang_concepts[concept][subconcept]


    cache = mycache

    filepath = f'.cache/{helper.convert_to_filename(prog_lang)}.yaml'
    helper.save_to_yaml(filepath, cache)



def load(lang_concepts_yaml,proglang):
    proglang_filename = helper.convert_to_filename(proglang)
    proglang_filepath = f'.cache/{proglang_filename}.yaml'
    cache_yaml = helper.load_from_yaml(proglang_filepath) if os.path.exists(proglang_filepath) else None

    global cache
    global lang_concepts
    cache = cache_yaml
    lang_concepts = lang_concepts_yaml

# def save():
#     '''
#     keep a previous of the yaml file. 
#     so next time we can ask ai only the changed prompt and concepts. 
#     Saves tokens.
#     '''
#     shutil.copyfile('prog_lang_concepts.yaml', '.plccache.yaml')


