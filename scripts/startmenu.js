// Get DOM Elements
const modal3 = document.querySelector("#menuItems");
const modalBtn3 = document.querySelector("#startbtn");

// Events
//modalBtn3.addEventListener("click", openModal);
//window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal3.style.display = "flex";
}

// Close
function closeModal() {
  modal3.style.display = "none";
}

modalBtn3.addEventListener("click", () => {
  if (modal3.style.display === "none") {
    openModal();
  } else {
    closeModal();
  }
});
