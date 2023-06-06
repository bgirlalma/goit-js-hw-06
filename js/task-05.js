const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');
inputEl.addEventListener('input', onInput)

console.dir(inputEl)
console.dir(spanEl)

function onInput(event) {
     spanEl.textContent = event.currentTarget.value === "" ? "Anonymous": event.currentTarget.value;

}
