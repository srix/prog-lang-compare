import os
import openai
from dotenv import load_dotenv

def request_text_completion(prompt, max_tokens=5):
    response = openai.Completion.create(
        model="davinci",
        prompt=prompt,
        max_tokens=max_tokens,
        temperature=0.7,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        stop=["\n", "Human:", "AI:"]
    )
    return response


def request_text_chatcompletion(prompt, max_tokens=5):
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a eager teacher."},
        {"role": "user", "content": prompt},
        ]
    )

    # Extract and print the assistant's reply from the response
    return response['choices'][0]['message']['content']


load_dotenv()
openai.organization = os.getenv('ORGANISATION_ID')
openai.api_key = os.getenv("OPENAI_API_KEY")
# modellist = openai.Model.list()
# print(modellist)



