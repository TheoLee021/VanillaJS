const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Don't let the noise of others' opinions drown out your own inner voice.",
        author: "Steve Jobs"
    },
    {
        quote: "When something is important enough, you do it even if the odds are not in your favor.",
        author: "Elon Musk"
    },
    {
        quote: "I could either watch it happen or be a part of it.",
        author: "Elon Musk"
    },
    {
        quote: "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
        author: "Vivian Greene"
    },
    {
        quote: "Most folks are as happy as they make up their minds to be.",
        author: "Abraham Lincoln"
    },
    {
        quote: "To develop a complete mind: Study the science of art. Study the art of science. Learn how to see. Realize that everything connects to everything else.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "A problem well stated is a problem half-solved.",
        author: "Charles F. Kettering"
    },
    {
        quote: "Creativity is just connecting things.",
        author: "Steve Jobs"
    },
    {
        quote: "It is not that I'm so smart, but I stay with problems longer.",
        author: "Albert Einstein"
    },
]
const randomNumber = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNumber];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;