const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);
console.dir(input)

function onInputBlur(event) {
  const activeInput = event.currentTarget.value;

    if(activeInput === input.data-length){
     input.border('.valid')
    } 
       input.border('.invalid')
    
    return 
}