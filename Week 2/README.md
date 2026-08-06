# Week 2

This folder contains the Week 2 project: a small FastAPI backend and a simple frontend that displays random quotes from the API.

## What is included

- `backend/main.py` - FastAPI app with a `/quote` endpoint
- `frontend/index.html` - page structure for the quote UI
- `frontend/main.css` - styling for the quote card
- `frontend/script.js` - fetches a random quote and updates the page
- `screenshots/` - saved screenshots of the UI and Postman response

## How it works

1. The frontend loads the page and calls `http://127.0.0.1:8000/quote`.
2. The backend requests a random quote from `https://dummyjson.com/quotes/random`.
3. The response is shown on the page with the quote text and author.

## Running locally

1. Start the backend:

   ```bash
   cd "Week 2/backend"
   uvicorn main:app --reload
   ```

2. Open `Week 2/frontend/index.html` in a browser.

## Notes

- The frontend expects the backend to be running on `127.0.0.1:8000`.
- The page includes a button to load a new quote without refreshing.
