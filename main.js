const header = document.querySelector("header");
const h1 = document.querySelector("h1");
let image = true;
let title = true;

const changeImage = () => {
  image = !image;
  title = !title;
  header.style.backgroundImage = image ? "url(beach.jpg)" : "url(family.jpg)";
  h1.textContent = title ? "Beach" : "Family";
};

header.addEventListener("click", changeImage);
