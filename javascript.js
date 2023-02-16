// Etch-a-sketch

const colorButton = document.getElementsByClassName('.color .button');
const rainbowButton = document.getElementsByClassName('.rainbow .button');
const shadeButton = document.getElementsByClassName('.shade .button');
const lightenButton = document.getElementsByClassName('.shade .button');
const eraserButton = document.getElementsByClassName('.eraser .button');
const resetButton = document.getElementsByClassName('.reset .button');


const dimensions = document.getElementsByClassName('.dimensions');
const gameBoard = document.getElementsByClassName('.game-board');

let quantity = 40;

const boxStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '1px',
    backgroundColor: "black",
    
}

// Player moves slider, values change and calls generateBoxes
const value = document.querySelector("#value");
const input= document.querySelector("#slider");
value.textContent = input.value + " x " + input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target.value + " x " + event.target.value;
    quantity = parseInt(event.target.value);   
    console.log("boxes" + quantity);
    generateBoxes(quantity);

});




function generateBoxes(quantity) {
    quantity *= quantity;
    console.log(quantity);

}





// function generate boxes
    // Takes number as parameter
    // # of boxes show up on screen




// Each button listens for event
    // returns color change

// rainbow waits for click
    // runs rainbow function

// rainbow function 
    // 


// Reset button listens for click
    // runs reset function

// reset function 
    // for loop that goes over each box and makes it grey

