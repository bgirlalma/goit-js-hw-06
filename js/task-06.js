const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
console.dir(input)

function onInputBlur(event) {
  const activeInput = event.target.value;
  const requiredLength = parseInt(input.dataset.length)

    if(activeInput.length === requiredLength){
     input.classList.add('valid')
     input.classList.remove('invalid')
    } else{
      input.classList.remove('valid')
      input.classList.add('invalid');
    }
      
}