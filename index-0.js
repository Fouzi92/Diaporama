let compteur = 0;
let timer, elements, slides, slideWidth;

window.onload = () => {
  const diapo = document.querySelector(".diapo");
  elements = document.querySelector(".elements");
  slides = Array.from(elements.children);

  slideWidth = diapo.getBoundingClientRect().width;

  let next = document.querySelector("#nav-droite");
  let prev = document.querySelector("#nav-gauche");
  next.addEventListener("clcick", slideNext);
  prev.addEventListener("clcick", slidePrev);
};

function slideNext() {
  compteur++;
  if (compteur == slides.length) {
    compteur = 0;
  }
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

function slidePrev() {
  compteur--;
  if (compteur < 0) {
    compteur = slides.length - 1;
  }
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}
