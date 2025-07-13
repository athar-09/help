let startTime;
let isPlaying = false;

const quotes = [
  "baro will you marry me",
  "rishon? is that how you spell it",
  "rihaan sweats at rocket league its not that deep bro",
  "mari likes men and wants to lick your feet",
  "I love Arjun habibi",
  "Never gonna give you up never gonna let you down",
  "Ayaan is so autistic",
];

let quote = ""; // this will hold the one random quote

const quoteDisplay = document.getElementById("quote");
const inputBox = document.getElementById("input");
const result = document.getElementById("result");
const feedback = document.getElementById("feedback");


function startTest() {
  if (isPlaying) return;

  isPlaying = true;
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();
  result.textContent = "";
  
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.textContent = quote;
  
  startTime = new Date().getTime();
}

inputBox.addEventListener("input", () => {
  if (inputBox.value.trim().toLowerCase() === quote.toLowerCase()) {

    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const words = quote.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);

    result.textContent = `🎉 You typed at ${wpm} words per minute!`;
    inputBox.disabled = true;
    isPlaying = false;
  }
});

function resetTest() {
  isPlaying = false;
  inputBox.value = "";
  inputBox.disabled = true;
  result.textContent = "";
  feedback.textContent = "";
  quoteDisplay.textContent = "Click 'Start' to begin";
}

