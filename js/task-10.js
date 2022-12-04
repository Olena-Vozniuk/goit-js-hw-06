function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('input');
const boxesEl = document.querySelector('#boxes');
const createBtn =  document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

function createBoxes(amount) {
    const allDivs = [];
    let currentSize = 30;
    for (let i = 1; i <= amount; i += 1) {
      currentSize += 10;
      let divEl = document.createElement('div');
      divEl.style.backgroundColor = getRandomHexColor();
      divEl.style.width =`${currentSize}px`;
      divEl.style.height =`${currentSize}px`;
      allDivs.push(divEl);
    };
  boxesEl.append(...allDivs);
};

const onBoxesCreate = (event) => {
  const boxesQuantity = inputEl.value;
  createBoxes(boxesQuantity);
};

function destroyBoxes() {
  boxesEl.innerHTML = '';
  inputEl.value = '';
}

const onBoxesDestroy = (event) => destroyBoxes();


createBtn.addEventListener('click', onBoxesCreate);
destroyBtn.addEventListener('click', onBoxesDestroy);


