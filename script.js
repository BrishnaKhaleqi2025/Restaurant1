const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});



function showSlide(index) {
  currentSlide = index;
  const offset = -index * 210; // فاصله هر عکس + فاصله بین
  track.style.transform = `translateX(${offset}px)`;

  bars.forEach(bar => bar.classList.remove('active'));
  bars[index].classList.add('active');
}

const track = document.getElementById('track');
let currentSlide = 0;
const totalSlides = 3;

function showSlide(index) {
  const offset = -index * 200;
  track.style.transform = `translateX(${offset}px)`;
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 2000);

    
    
ScrollReveal().reveal(".order__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".event__content", {
  duration: 1000,
});




