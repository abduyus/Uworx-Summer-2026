# How prompting techniques affects various LLMs outputs
### Here is the various responses given by models with few shot, zero shot, and chain of thought prompting techniques

**Base prompt**:
```
Classify the sentiment of the following review as Positive, Negative, or Neutral.

Review:
"The battery lasts all day, but the camera quality is average."

Sentiment:
```

## Zero Shot Prompting

### Prompt 
```
Classify the sentiment of the following review as Positive, Negative, or Neutral.

Review:
"The battery lasts all day, but the camera quality is average."

Sentiment:
```

### ChatGPT response
```
Sentiment: Neutral
The review mentions a positive aspect ("The battery lasts all day") and a neutral/slightly negative aspect ("the camera quality is average"), resulting in an overall neutral sentiment.
```
### Claude response
```
Sentiment: Neutral
```
---
## Few Shot Prompting

### Prompt 
```
Classify the sentiment of the following reviews as Positive, Negative, or Neutral.

Example 1:
Review: "The food was amazing."
Sentiment: Positive

Example 2:
Review: "The service was terrible."
Sentiment: Negative

Now classify this review:

Review:
"The battery lasts all day, but the camera quality is average."

Sentiment:
```

