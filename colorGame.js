let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

let numSquares = 6;
let colors = [];
var pickedColor;

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

resetButton.addEventListener("click", function(){
  reset();
});

function setUpModeButtons(){
  for(let i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  for(let i=0; i< squares.length; i++){
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        changeColors(pickedColor);
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}

function changeColors(color){
  for(let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function generateRandomColors(num){
  let arr = [];
  for(let i=0; i<num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  h1.style.backgroundColor = "steelblue";
  colorDisplay.textContent = pickedColor;
  for(let i=0; i< squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else {
      squares[i].style.display = "none";
    }
  }
}

function randomColor(){
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  "rgb(red, green, blue)"
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
