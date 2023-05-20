import os
import yaml

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

def save_to_yaml(filepath, content):
    #save yaml file
     # Create the directory if it does not exist
    directory = os.path.dirname(filepath)
    if not os.path.exists(directory):
        os.makedirs(directory)

    with open(filepath, 'w', encoding='utf-8') as outfile:
        yaml.dump(content, outfile, default_flow_style=False)


def get_safename(value):
    trans_table = str.maketrans('. -?()', '______')
    return value.translate(trans_table)