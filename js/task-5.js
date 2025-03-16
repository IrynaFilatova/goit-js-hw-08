"use strict";
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.body;
const spanColor = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
btnEl.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newColor;
  spanColor.textContent = newColor;
});
