// Get DOM Elements
const modal1 = document.querySelector("#amy-icon1");
const modalBtn1 = document.querySelector("#btn1");
const closeBtn1 = document.querySelector("#close1");

// Events
modalBtn1.addEventListener("click", openModal);
closeBtn1.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal1.style.display = "block";
}

// Close
function closeModal() {
  modal1.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal1) {
    modal1.style.display = "block";
  }
}
