const text = "Welcome to my digital lair.";
const delay = 50;
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typed-text").textContent += text.charAt(index);
    index++;
    setTimeout(type, delay);
  }
}

window.onload = type;
