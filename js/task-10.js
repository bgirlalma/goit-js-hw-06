function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.getElementById("controls");
const inputElement = controlsEl.querySelector("input");
const createButton = controlsEl.querySelector("[data-create]");
const destroyButton = controlsEl.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

createButton.addEventListener("click", function() {
  const amount = inputElement.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxes.innerHTML = ""; }
