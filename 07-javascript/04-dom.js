// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

// Exercise #1
const input1 = document.getElementById("userInput1");
const copyBtn = document.getElementById("copy");
const outputBox = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  outputBox.textContent = input1.value;
});

// Exercise #2
const input2 = document.getElementById("userInput2");

// Create a new output <div> for live input output
const outputLive = document.createElement("div");
outputLive.classList.add("output");
document.getElementById("inputEventExample").appendChild(outputLive);

input2.addEventListener("input", () => {
  outputLive.textContent = input2.value;
});
