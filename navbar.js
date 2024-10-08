const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navbar = document.querySelector(".navbar");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("open");
});
