const fontSizeControl = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

const onCheckInput = evt => {
    text.style.fontSize = `${evt.target.value}px`
};

fontSizeControl.addEventListener('input', onCheckInput)