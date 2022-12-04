const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputData);

function onInputData(event) {
    if (event.currentTarget.value) {
        return outputEl.textContent = event.currentTarget.value
    } outputEl.textContent = 'Anonymous'
}; 

