const spanEl = document.querySelector("#value");
const buttons = document.querySelectorAll("button[data-action]");
buttons.forEach((button) => button.addEventListener("click", onBtnClick));
function onBtnClick(event) {
  const { action } = event.currentTarget.dataset;
  switch (action) {
    case "decrement":
      const x = Number(spanEl.textContent);
      spanEl.textContent = x - 1;
      return console.log("Minus odin");
    case "increment":
      const y = Number(spanEl.textContent);
      spanEl.textContent = y + 1;
      return console.log("Plus odin");
  }
}
