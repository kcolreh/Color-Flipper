const colorButton = document.getElementById('random-button');
const colorDisplayedText = document.getElementById('color-displayed');
const wholePage = document.getElementById('whole-page');
const autoButton = document.getElementById('auto-button');
const textColorsButton = document.getElementById('text-colors');
const mainText = document.getElementById('main-text');
const resetButton = document.getElementById('reset-colors');
let interval = null;

colorButton.addEventListener('click', () => {
    generateRandomColor();
    wholePage.style.backgroundColor = backgroundColor;
    colorDisplayedText.textContent = backgroundColor;
    clearInterval(interval);
    interval = null;
})

autoButton.addEventListener('click', () => {
    if (interval === null) {
        interval = setInterval(() => {
            generateRandomColor();
            wholePage.style.backgroundColor = backgroundColor;
            colorDisplayedText.textContent = backgroundColor;
        }, 1000)
    } else {
        clearInterval(interval);
        interval = null;
    }
})

textColorsButton.addEventListener('click', () => {
    generateRandomColor2();
    mainText.style.color = backgroundColor2;
    colorDisplayedText.style.color = backgroundColor2;
})

resetButton.addEventListener('click', () => {
    mainText.style.color = 'black';
    colorDisplayedText.style.color = 'black';
    wholePage.style.backgroundColor = 'white';
    colorDisplayedText.textContent = 'Displayed color';
})

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function generateRandomColor2() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return backgroundColor2 = 'rgb(' + r + ',' + g + ',' + b + ')';
}