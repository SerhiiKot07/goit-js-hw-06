const inputEl = document.querySelector("#validation-input");
const inputLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
});
