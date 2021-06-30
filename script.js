// Бургер меню:
const burgerButton = document.querySelector(".header_burger-menu");
const burgerMenu = document.querySelector(".container-burger-menu__open");
const logoOutsideBurger = document.querySelector(".logo");
const allContent = document.querySelector("body");
const listItems = document.querySelector(".menu__open-list");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("open");
  burgerMenu.classList.toggle("open");
  logoOutsideBurger.classList.toggle("hide");
  allContent.classList.toggle("stop");
});

listItems.addEventListener("click", () => {
  burgerButton.classList.remove("open");
  burgerMenu.classList.remove("open");
  logoOutsideBurger.classList.remove("hide");
  allContent.classList.remove("stop");
});

// Слайдер:
const sliderButtonLeft = document.querySelector(".button_arrow-left");
const sliderButtonRight = document.querySelector(".button_arrow-right");
const sliderContent = document.querySelector(".slider-track");
let position = 0;
const sliderCount = 2;
const sizeImg = 100;
const maxPosition = sliderCount * -sizeImg + sizeImg;
const leftImg = document.querySelector(".button_arrow-left img");
const rightImg = document.querySelector(".button_arrow-right img");

function getDisabled(position) {
  if (position === 0) {
    sliderButtonLeft.disabled = true;
  }
  if (position < 0) {
    sliderButtonLeft.disabled = false;
  }
  if (position === maxPosition) {
    sliderButtonRight.disabled = true;
  }
  if (position > maxPosition) {
    sliderButtonRight.disabled = false;
  }
}

sliderButtonRight.addEventListener("click", () => {
  rightImg.src = "./assets/arrow-right2.svg";
  leftImg.src = "./assets/arrow-left2.svg";
  if (position > maxPosition) {
    position -= sizeImg;
    sliderContent.style.transform = `translate(${position}%)`;
    getDisabled(position);
  }
});

sliderButtonLeft.addEventListener("click", () => {
  rightImg.src = "./assets/arrow-right.svg";
  leftImg.src = "./assets/arrow-left.svg";
  if (position < 0) {
    position += sizeImg;
    sliderContent.style.transform = `translate(${position}%)`;
    getDisabled(position);
  }
});
