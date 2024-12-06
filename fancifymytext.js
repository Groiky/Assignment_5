// Display initial alert to ensure JS is connected
alert("Hello, world!");

// Function to make the text bigger
function makeTextBigger() {
  const textArea = document.getElementById("textArea");
  textArea.style.fontSize = "24pt";
}

// Function to apply "FancyShmancy" styles
function applyFancyStyle() {
  const textArea = document.getElementById("textArea");
  if (document.getElementById("fancyRadio").checked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  }
}

// Function to remove "FancyShmancy" styles (for "BoringBetty")
function removeFancyStyle() {
  const textArea = document.getElementById("textArea");
  if (document.getElementById("boringRadio").checked) {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Function to uppercase and add "-Moo" to sentences
function addMoo() {
  const textArea = document.getElementById("textArea");
  const sentences = textArea.value.split(".");
  for (let i = 0; i < sentences.length - 1; i++) {
    sentences[i] = sentences[i].trim().toUpperCase() + "-Moo";
  }
  textArea.value = sentences.join(". ");
}
