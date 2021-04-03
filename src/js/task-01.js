const itemsEl = document.querySelectorAll(".item");
console.log(`В списке ${itemsEl.length} категории`);
itemsEl.forEach((e) => {
  console.log(`Категория: ${e.querySelector("h2").textContent}`);
  console.log(`Количество элементов: ${e.querySelectorAll("li").length}`);
});
