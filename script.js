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

async function fetchRandomQuote() {
    try {
        // Requesting a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Extracting and displaying the quote and author
        document.getElementById('quoteDisplay').innerText = `"${data.content}"`;
        document.getElementById('authorDisplay').innerText = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        document.getElementById('quoteDisplay').innerText = "Could not fetch a quote.";
        document.getElementById('authorDisplay').innerText = "";
    }
}

// Attach the function to the button click
document.getElementById('newQuoteButton').addEventListener('click', fetchRandomQuote);


