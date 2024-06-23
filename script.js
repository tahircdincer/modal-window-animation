"use strict";

const closeBtn = document.querySelector(".btn-close");
const openBtn = document.querySelector(".btn-open");
const modalWindow = document.querySelector(".container");

// Event Listeners to buttons

openBtn.addEventListener("click", function () {
  modalWindow.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalWindow.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalWindow) {
    modalWindow.style.display = "none";
    console.log(e.target);
    console.log(modalWindow);
  }
});
