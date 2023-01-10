// Get DOM Elements
const modal3 = document.querySelector("#menuItems");
const modalBtn3 = document.querySelector("#startbtn");

// Events
modalBtn3.addEventListener("click", openModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal3.style.display = "flex";
}

// Close
function closeModal() {
  modal3.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal3) {
    modal3.style.display = "none";
  }
}
