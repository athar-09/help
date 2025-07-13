let startTime;
let isPlaying = false;

const quote = "The quick brown fox jumps over the lazy dog.";
const quoteDisplay = document.getElementById("quote");
const inputBox = document.getElementById("input");
const result = document.getElementById("result");

function startTest() {
  if (isPlaying) return;

  isPlaying = true;
  inputBox.value = "";
  inputBox.disabled = false;
  inputBox.focus();
  result.textContent = "";
  quoteDisplay.textContent = quote;
  startTime = new Date().getTime();
}

inputBox.addEventListener("input", () => {
  if (inputBox.value === quote) {
    const endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const words = quote.split(" ").length;
    const wpm = Math.round((words / timeTaken) * 60);

    result.textContent = `🎉 You typed at ${wpm} words per minute!`;
    inputBox.disabled = true;
    isPlaying = false;
  }
});
