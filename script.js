let container = document.querySelector("container");
let div = document.createElement("div");
div.className = "boxes";

function makeGrid() {
   for (let i = 0; i < 256; i++) {
      container.append(div.cloneNode(true))
   }
}


makeGrid();
let boxes = document.querySelectorAll(".boxes");
boxes.forEach(element => element.addEventListener("mouseover", color)
);

function color() {
   let r = Math.round(Math.random() * 255);
   let g = Math.round(Math.random() * 255);
   let b = Math.round(Math.random() * 255);
   this.style.backgroundColor = `rgb(${r},${g},${b})`;

}



