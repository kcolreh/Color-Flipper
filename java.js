const colorButton = document.getElementById('random-button');
const colorDisplayedText = document.getElementById('color-displayed');
const wholePage = document.getElementById('whole-page');

colorButton.addEventListener('click', () => {
    generateRandomColor ();
    wholePage.style.backgroundColor = backgroundColor;
})

function generateRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log (r, g, b)
    return backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}