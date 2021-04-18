//Declaring variables & grabbing elements from HTML
let container = document.querySelector("container");
let div = document.createElement("div");
div.className = "boxes";
let selection = 16;
let boxes = "";

//Drawing grid & applying CSS
function makeGrid() {
  for (let i = 0; i < selection * selection; i++) {
    container.append(div.cloneNode(true));
  }
  container.style.gridTemplateColumns = `repeat(${selection}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${selection}, 1fr)`;
}

makeGrid();

//Random colors for boxes
function color() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  this.style.backgroundColor = `rgb(${r},${g},${b})`;
}
//Event listening for hover on box
function coloring() {
  boxes = document.querySelectorAll(".boxes");
  boxes.forEach((element) => element.addEventListener("mouseover", color));
}

coloring();

//Deleting grid & entering new value
function clearMakeGrid() {
  boxes.forEach((box) => {
    box.parentNode.removeChild(box);
  });

  selection = prompt("Enter your grid size", 32);
  if (selection > 100 || selection < 1) {
    selection = 16;
    alert("Enter number beetwen 1 and 100");
  }
  makeGrid();
  coloring();
}

let clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clearMakeGrid);
