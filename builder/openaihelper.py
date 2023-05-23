import os
import time
import openai
import logging
from dotenv import load_dotenv
import tenacity
from tenacity import (
    retry,
    stop_after_attempt,
    wait_random_exponential,
    after_log
)  # for exponential backoff
 
logger = logging.getLogger(__name__)

def ai_ask(prompt):
    response=None
    try:
       response=  request_text_chatcompletion(prompt, max_tokens=5)

    except openai.error.APIError as error:
        #Handle API error here, e.g. retry or log
        logger.error("OpenAI API returned an API Error: {error}")
    except openai.error.APIConnectionError as error:
        #Handle connection error here
        logger.error("Failed to connect to OpenAI API: {error}")
    except openai.error.RateLimitError as error:
        #Handle rate limit error (we recommend using exponential backoff)
        logger.error(f"OpenAI API request exceeded rate limit: {error}")
    except tenacity.RetryError as  error:
        logger.error('Retry Failed Error at %s', 'division', exc_info=e)

    # Extract and print the assistant's reply from the response
    return response['choices'][0]['message']['content']

@retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6), after=after_log(logger, logging.DEBUG))
def request_text_chatcompletion(prompt, max_tokens=5):
    '''
    Request a text chat completion from the OpenAI API.
    This function will retry up to 6 times with exponential backoff if the API returns an error.'''
   
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a eager teacher."},
        {"role": "user", "content": prompt},
        ]
    )

    return response



load_dotenv()
openai.organization = os.getenv('OPENAI_ORGANISATION_ID')
openai.api_key = os.getenv("OPENAI_API_KEY")


