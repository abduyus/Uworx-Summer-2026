const quoteBox = document.querySelector('.quote');
const quoteBtn = document.querySelector('.new-quote');

const getQuote = async () => {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    quoteBox.textContent = `"${data.quote}" — ${data.author}`;
};

quoteBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getQuote();
});

getQuote();
