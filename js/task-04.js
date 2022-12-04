let counterValue = 0;

const decrementsBtn = document.querySelector('button[data-action="decrement"]');
const incrementsBtn = document.querySelector('button[data-action="increment"]');
const values = document.querySelector('#value');

const onDecrementsBtnClick = (evt) => {
    counterValue -=1;
    values.textContent = counterValue;
};

const onIncrementsBtnClick = (evt) => {
    counterValue +=1;
    values.textContent = counterValue;
};

decrementsBtn.addEventListener('click', onDecrementsBtnClick);
incrementsBtn.addEventListener('click', onIncrementsBtnClick);