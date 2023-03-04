const inputEl = document.querySelector("#font-size-control");
const textInputEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  textInputEl.style.fontSize = `${inputEl.value}px`;
});
