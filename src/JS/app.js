const burger = document.querySelector(".nav__options-burger");
const menu = document.querySelector(".nav__menu");

burger.addEventListener("click", () => {
    menu.classList.toggle("nav__menu--active");
})