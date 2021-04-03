const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector("#gallery");
const makeGaleryMarkup = (image) => {
  return `
  <li class="img_card">
        <img src="${image.url}" alt="${image.alt}" width=30%>
      </li>
  `;
};
const makeGaleryPortfolio = images.map(makeGaleryMarkup).join("");
galleryEl.insertAdjacentHTML("beforeend", makeGaleryPortfolio);
