const itemEl = document.querySelectorAll('.item');
console.log("Number of categories:", itemEl.length);

const elementsByHeading = document.querySelectorAll('h2');


elementsByHeading.forEach(element => {
    const listOfElements = element.nextElementSibling;
    const numberOfElements = listOfElements.querySelectorAll('li');

    console.log("Category:", element.textContent +"\nElements:", numberOfElements.length);
})

