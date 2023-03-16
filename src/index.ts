// Si menu-btn est cliqué alors on ajoute la classe "open" à la div "menu"
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
	menu.classList.toggle("open");
});