function changeText() {
  const introText = document.getElementById("intro-text");
  introText.textContent = "Visit us to pick your own fresh fruits!";
}

function highlightSection() {
  const section = document.getElementById("highlight");
  section.classList.toggle("highlighted");
}

function addFruit() {
  const fruitList = document.getElementById("list");
  const newFruit = document.createElement("li");
  newFruit.textContent = "Strawberries";
  fruitList.appendChild(newFruit);
}

function removeFruit() {
  const fruitList = document.getElementById("list");
  if (fruitList.lastElementChild) {
    fruitList.removeChild(fruitList.lastElementChild);
  }
}
