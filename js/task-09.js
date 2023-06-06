
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widgetEl = document.querySelector('.widget');
const colorSpan = document.querySelector('.color');
const button =document.querySelector('.change-color')

button.addEventListener('click', function() {
  const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;
});


