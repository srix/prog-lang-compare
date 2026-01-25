# Copyright 2026 Programming Language Comparison Contributors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import os
import time
from openai import OpenAI, APIError, APIConnectionError, RateLimitError
import logging
from dotenv import load_dotenv
import tenacity
from tenacity import (
    retry,
    stop_after_attempt,
    wait_random_exponential,
    after_log
)  # for exponential backoff

# Load environment variables
load_dotenv()

logger = logging.getLogger(__name__)

# Initialize OpenAI client
client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY"),
    organization=os.getenv("OPENAI_ORGANISATION_ID")
)

def ai_ask(prompt):
    """
    Request AI completion from OpenAI with error handling.
    Returns the AI-generated content or raises an exception.
    """
    try:
        response = request_text_chatcompletion(prompt, max_tokens=2000)
        return response

    except APIError as error:
        # Handle API error here, e.g. retry or log
        logger.error(f"OpenAI API returned an API Error: {error}")
        raise
    except APIConnectionError as error:
        # Handle connection error here
        logger.error(f"Failed to connect to OpenAI API: {error}")
        raise
    except RateLimitError as error:
        # Handle rate limit error (we recommend using exponential backoff)
        logger.error(f"OpenAI API request exceeded rate limit: {error}")
        raise
    except tenacity.RetryError as error:
        logger.error(f'Retry Failed Error: {error}')
        raise

@retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(6), after=after_log(logger, logging.DEBUG))
def request_text_chatcompletion(prompt, max_tokens=2000):
    '''
    Request a text chat completion from the OpenAI API.
    This function will retry up to 6 times with exponential backoff if the API returns an error.
    '''
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an eager teacher."},
            {"role": "user", "content": prompt},
        ],
        max_tokens=max_tokens
    )

    # Extract and return the assistant's reply from the response
    return response.choices[0].message.content
