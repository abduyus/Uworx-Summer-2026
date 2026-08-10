const quoteBox = document.querySelector('.quote');
const quoteBtn = document.querySelector('.new-quote');
const authorBox = document.querySelector('.author');

const getQuote = async () => {
    quoteBtn.disabled = true;
    const response = await fetch('http://127.0.0.1:8000/quote');
    const data = await response.json();
    quoteBox.textContent = `"${data.quote}"`;
    authorBox.textContent = `— ${data.author}`
    quoteBtn.disabled = false;
};

quoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getQuote();
});

getQuote();
