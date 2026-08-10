from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/quote")
def get_quote():
    response = requests.get("https://dummyjson.com/quotes/random")
    if response.status_code == 200:
        data = response.json()
        print(data)
        return {"quote": data["quote"], "author": data["author"]}
    else:
        return {"error": "Could not retrieve quote"}
