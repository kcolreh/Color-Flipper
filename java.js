const colorButton = document.getElementById('random-button');
const colorDisplayedText = document.getElementById('color-displayed');
const wholePage = document.getElementById('whole-page');
const autoButton = document.getElementById('auto-button');
let interval = null;

colorButton.addEventListener('click', () => {
    generateRandomColor();
    wholePage.style.backgroundColor = backgroundColor;
    colorDisplayedText.textContent = backgroundColor;
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

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r, g, b)
    return backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}