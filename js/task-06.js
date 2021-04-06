const inputEl = document.querySelector("#validation-input");
const changeInputClass = (input, classToChange, changeTo) => {
  input.classList.remove(classToChange);
  input.classList.add(changeTo);
};

inputEl.addEventListener("blur", (ev) => {
  if (ev.currentTarget.value.length === Number(inputEl.dataset.length)) {
    changeInputClass(inputEl, "invalid", "valid");
  } else {
    changeInputClass(inputEl, "valid", "invalid");
  }
});
