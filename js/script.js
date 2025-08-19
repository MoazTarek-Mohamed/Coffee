const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const closeMenu = document.getElementById("close-menu");
const pageContent = document.querySelector(".blur-effect");

function openMenu() {
  navMenu.classList.add("active");
  menuToggle.classList.add("active");
  pageContent.classList.add("blur");
}

function closeMenuFn() {
  navMenu.classList.remove("active");
  menuToggle.classList.remove("active");
  pageContent.classList.remove("blur");
}

menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFn);

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) closeMenuFn();
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 992) closeMenuFn();
  });
});

document.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    e.target !== menuToggle
  ) {
    closeMenuFn();
  }
});

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
