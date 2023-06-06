const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
input.addEventListener('input', onInput);

function onInput(event){
   const fontSize = input.value
   span.style.fontSize = fontSize + "px";
}
