import os
import openai
from dotenv import load_dotenv




load_dotenv()


openai.organization = os.getenv('ORGANISATION_ID')
openai.api_key = os.getenv("OPENAI_API_KEY")
modellist = openai.Model.list()
print(modellist)
