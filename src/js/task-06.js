const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);
function onInputBlur(ev) {
  if (ev.currentTarget.value.length <= 6) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  } else {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  }
}
