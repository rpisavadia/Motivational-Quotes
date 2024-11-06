// Local dataset of quotes
const quotes = [
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Do not let what you cannot do interfere with what you can do.", author: "John Wooden" },
    { text: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerText = `"${selectedQuote.text}"`;
    document.getElementById('authorDisplay').innerText = `- ${selectedQuote.author}`;
}

// Event listener for the button
document.getElementById('newQuoteButton').addEventListener('click', displayRandomQuote);

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
    try {
        const response = await fetch("https://zenquotes.io/api/[mode]?option1=value&option2=value");
        const data = await response.json();
        document.getElementById('quoteDisplay').innerText = `"${data.content}"`;
        document.getElementById('authorDisplay').innerText = `- ${data.author}`;
    } catch (error) {
        document.getElementById('quoteDisplay').innerText = "Oops! Couldn't fetch a quote.";
        document.getElementById('authorDisplay').innerText = "";
    }
}

// Event listener to call API on button click
document.getElementById('newQuoteButton').addEventListener('click', fetchRandomQuote);
