from transformers import pipeline

pipe = pipeline(
    "sentiment-analysis",
    model="distilbert/distilbert-base-uncased-finetuned-sst-2-english"
)

result = pipe("I really like this film.")

print(result)