const counterEl = document.querySelector('#value');
const removeEl = document.querySelector('button[data-action="decrement"]');
const addsEl = document.querySelector('button[data-action="increment"]')

counterEl.addEventListener('click', onCounter);
removeEl.addEventListener('click', deletesOneOnClick);
addsEl.addEventListener('click', addsOneOnClick);

let counterValue = 0;

function addsOneOnClick (event) {
    counterValue += 1;
    counterEl.textContent = counterValue;
    counterEl.style.color = 'blue';
}

function deletesOneOnClick (event) {
    counterValue -= 1;
    counterEl.textContent = counterValue;
    counterEl.style.color = 'red';
}

function onCounter (event) {
   
}

