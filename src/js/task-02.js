const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsUl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const ingredientsLi = document.createElement("li");
  ingredientsLi.textContent = ingredient;
  return ingredientsLi;
});

ingredientsUl.append(...elements);
