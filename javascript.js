// Etch-a-sketch

const colorButton = document.querySelector('.color .button');
const rainbowButton = document.querySelector('.rainbow .button');
const randomButton = document.querySelector('.random .button ');
const eraserButton = document.querySelector('.eraser .button');
const resetButton = document.querySelector('.reset .button');
const gameBoard = document.querySelector('.game-board');

const colorPickerBtn = document.querySelector('.color-picker-btn');
const colorPicker = document.querySelector('.color-picker');
const activeColor = document.querySelector('.active-color');
const value = document.querySelector("#value");
const input= document.querySelector("#slider");
const boxes = document.querySelectorAll('div.box');

let selectedColor = '#000';
let canDraw = false;
let quantity = 40;


colorPickerBtn.addEventListener('click', () => {
    colorPicker.click();
});


// User picks color
colorPicker.addEventListener('input', (event) => {
    selectedColor = event.target.value;
    colorPickerBtn.style.backgroundColor = selectedColor;
    activeColor.style.backgroundColor = selectedColor;
    canDraw = true;
});


const boxStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    boxSizing: 'border-box',
    margin: '1px',
    backgroundColor: "black",
}


// Player moves slider, values change and calls generateBoxes
value.textContent = input.value + " x " + input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value + " x " + event.target.value;
    quantity = parseInt(event.target.value);   
    console.log("boxes: " + quantity);
    generateBoxes(quantity);
});


// Creates boxes based on how many user chose
function generateBoxes(quantity) {
    gameBoard.innerHTML = '';
    rainbowTog = false;

    gameBoard.style.gridTemplateColumns = `repeat(${quantity}, 1fr`;
    gameBoard.style.gridTemplateRows = `repeat(${quantity}, 1fr`;

    for (let i = 0; i < quantity ** 2; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = activeColor.style.backgroundColor || '#000';

        Object.assign(box.style, boxStyles);
        gameBoard.appendChild(box);

        box.addEventListener('mouseover', () => {
            if(canDraw) {
                if (rainbowTog) {
                    box.style.backgroundColor = randomColor();
                    
                } else {
                    box.style.backgroundColor = selectedColor || 
                    activeColor.style.backgroundColor;
                }
            }
        });
    }
}


rainbowButton.addEventListener('click', () => {
    rainbowTog = true;
})

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

randomButton.addEventListener('click', () => {
    rainbowTog = false;
    randColor = randomColor();
    activeColor.style.backgroundColor = randColor;
    selectedColor = randColor;
    activeColor.style.backgroundColor = selectedColor;
    canDraw = true;
});

resetButton.addEventListener('click', () => {
    generateBoxes(quantity);
    rainbowTog = false;
});

eraserButton.addEventListener('click', () => {
    rainbowTog = false;
    selectedColor = '#000';
    activeColor.style.backgroundColor = selectedColor;
    console.log('here');
    console.log(selectedColor);
});


generateBoxes(40);