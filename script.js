let color = "#2b3467";
let click = true;
let invalid = document.querySelector(".invalid");

const grid = function (size) {
  let grid = document.querySelector(".grid");

  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  let amount = size * size;

  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "#FCFFE7";
    grid.insertAdjacentElement("beforeend", square);
  }
};

grid(16);

const changeGrid = function (gridSize) {
  if (gridSize >= 2 && gridSize <= 100) {
    grid(gridSize);
    invalid.style.display = "none";
  } else {
    invalid.style.display = "block";
  }
};

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function reset() {
  let grid = document.querySelector(".grid");
  let squares = grid.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "#FCFFE7"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
  }
});
