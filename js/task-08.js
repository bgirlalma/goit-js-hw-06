const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = formEl.elements.email;
    const passwordInput = formEl.elements.password;

    if(emailInput.value === "" || passwordInput.value === "") {
        alert ("Пожалуйста заполните все поля");
    } else{
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        }
        console.log(formData)
        formEl.reset()
    }
});
