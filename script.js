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

//Portfolio:

const portfolioContainer = document.querySelector(".portfolio_img_conteiner");

const imgList = [
  "./assets/portfolio-1.png",
  "./assets/portfolio-2.png",
  "./assets/portfolio-3.png",
  "./assets/portfolio-4.png",
  "./assets/portfolio-5.png",
  "./assets/portfolio-6.png",
  "./assets/portfolio-7.png",
  "./assets/portfolio-8.png",
  "./assets/portfolio-9.png",
  "./assets/portfolio-10.png",
  "./assets/portfolio-11.png",
  "./assets/portfolio-12.png",
];

const imgListWebDesign = [
  "./assets/portfolio-6.png",
  "./assets/portfolio-11.png",
  "./assets/portfolio-5.png",
  "./assets/portfolio-1.png",
  "./assets/portfolio-8.png",
  "./assets/portfolio-3.png",
  "./assets/portfolio-2.png",
  "./assets/portfolio-4.png",
  "./assets/portfolio-7.png",
  "./assets/portfolio-12.png",
  "./assets/portfolio-9.png",
  "./assets/portfolio-10.png",
];

for (let i = 0; i < imgList.length; i++) {
  const divForImg = document.createElement("div");
  divForImg.className = "img_portfolio";

  const imgItem = document.createElement("img");
  imgItem.className = "img_portfolio-content";

  portfolioContainer.append(divForImg);
  divForImg.append(imgItem);
  imgItem.src = imgList[i];
}

const images = document.querySelectorAll(".img_portfolio-content");
const divWrap = document.querySelectorAll(".img_portfolio");

const webDesign = document.querySelector(".box_word_webdesign");
webDesign.addEventListener("click", () => {
  for (i = 0; i < images.length; i++) {
    images[i].src = imgListWebDesign[i];
    images[i].style.filter = "none";
    images[i].style.display = "block";
  }
});

const all = document.querySelector(".box_word_all");
all.onclick = () => {
  for (i = 0; i < images.length; i++) {
    images[i].src = imgList[i];
    images[i].style.filter = "none";
    images[i].style.display = "block";
  }
};

const graphicdesign = document.querySelector(".box_word_graphicdesign");
graphicdesign.onclick = () => {
  for (i = 0; i < images.length; i++) {
    images[i].style.filter = "grayscale(100%)";
    // images[i].style.display = "block";
  }
};

const artwork = document.querySelector(".box_word_artwork");
artwork.onclick = () => {
  for (i = 0; i < images.length; i++) {
    images[i].src = imgList[i];
    images[i].style.filter = "none";
  }
  images[0].style.display = "none";
  setTimeout(() => images[0].style.display = "", 100);
  images[2].style.display = "none";
  setTimeout(() => images[2].style.display = "", 200);
  images[5].style.display = "none";
  setTimeout(() => images[5].style.display = "", 300);
  images[7].style.display = "none";
  setTimeout(() => images[7].style.display = "", 400);
  images[8].style.display = "none";
  setTimeout(() => images[8].style.display = "", 500);
  images[10].style.display = "none";
  setTimeout(() => images[10].style.display = "", 600);
  images[1].style.display = "none";
  setTimeout(() => images[1].style.display = "", 700);
  images[3].style.display = "none";
  setTimeout(() => images[3].style.display = "", 800);
  images[4].style.display = "none";
  setTimeout(() => images[4].style.display = "", 900);
  images[6].style.display = "none";
  setTimeout(() => images[6].style.display = "", 1000);
  images[9].style.display = "none";
  setTimeout(() => images[9].style.display = "", 1100);
  images[11].style.display = "none";
  setTimeout(() => images[11].style.display = "", 1200);
  images[12].style.display = "none";
  setTimeout(() => images[12].style.display = "", 1300);
};
