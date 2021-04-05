const inputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");
inputEl.addEventListener("change", onInputChange);
function onInputChange(ev) {
  if (ev.currentTarget.value < 1) {
    nameOutputEl.textContent = "незнакомец";
  } else {
    nameOutputEl.textContent = ev.currentTarget.value;
  }
}
