const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("input", (e) => {
  text.style.fontSize = e.currentTarget.value + "px";
});
