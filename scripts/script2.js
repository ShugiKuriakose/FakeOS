// create a variable that references the element we want to drag - initialize to null

let dragging = null;

// store some offset coorindates for the element we're dragging

let dragOffsetX = 0;
let dragOffsetY = 0;

document.addEventListener("mousemove", (event) => {
  if (dragging) {
    dragging.style.left = event.clientX - dragOffsetX + "px";
    dragging.style.top = event.clientY - dragOffsetY + "px";
  }
});

document.addEventListener("mouseup", (event) => {
  if (dragging) {
    dragging.classList.remove("dragging");
    dragging = null;
  }
});

document.querySelectorAll(".draggable").forEach((element) => {
  element.addEventListener("mousedown", (event) => {
    dragging = event.target;
    dragOffsetX = event.offsetX;
    dragOffsetY = event.offsetY;
    event.target.classList.add("dragging");
  });
});
