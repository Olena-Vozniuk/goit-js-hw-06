const inputEl = document.querySelector('#validation-input');
const valid = Number(inputEl.dataset.length);


const onValueIsCorrect = event => {
    if (inputEl.value.length !== valid) {
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    };
};


inputEl.addEventListener('blur', onValueIsCorrect);

