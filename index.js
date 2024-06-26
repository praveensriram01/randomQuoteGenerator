const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "In the end, we only regret the chances we didn't take. - Lewis Carroll",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
    "What we think, we become. - Buddha",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Act as if what you do makes a difference. It does. - William James",
    "The best revenge is massive success. - Frank Sinatra",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Dream big and dare to fail. - Norman Vaughan",
    "Change the world by being yourself. - Amy Poehler",
    "Every moment is a fresh beginning. - T.S. Eliot",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt"
]

const usedIndex = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    while (true) {
        const randomIndex = Math.floor(Math.random() * quotes.length)

        if (usedIndex.has(randomIndex)) continue

        const quote = quotes[randomIndex]
        quoteElement.innerHTML = quote
        usedIndex.add(randomIndex)
        break
    }
}