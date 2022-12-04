function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

const changeColorBtn = document.querySelector('.change-color');
const nameOfColor = document.querySelector('.color')
const body = document.querySelector('body')

changeColorBtn.addEventListener('click', onBackgroundNewColor);

function onBackgroundNewColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  nameOfColor.textContent = getRandomHexColor();
  };


