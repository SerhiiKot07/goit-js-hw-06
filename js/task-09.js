function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const textBackgroundColorName = document.querySelector(".color");

bodyEl.addEventListener("click", changeColorClick);

function changeColorClick(event) {
  const currentColor = getRandomHexColor();
  textBackgroundColorName.textContent = currentColor;
  bodyEl.style.backgroundColor = currentColor;
}
