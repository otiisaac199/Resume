// function scrollToTop() {
//   window.scrollTo({
//     behavior: "smooth",
//   });
// }

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 350) {
    navC.style.backgroundColor = "rgba(88, 88, 88, .6)";
  } else {
    navC.style.backgroundColor = "transparent";
  }
});

// hamburger

const hamburger = document.querySelector(".hamburger-bars");
const navC = document.querySelector(".nav");
const navlinks = document.querySelector(".nav-links");
const navlinksA = document.querySelector(".nav-links a");

hamburger.addEventListener("click", (item) => {
  hamburger.classList.toggle("active");
  navlinks.classList.toggle("active");
  console.log(item);
  // mobile_menu.classList.toggle("active");
});

// page loader

const pageLoader = document.querySelector(
  ".loadingio-spinner-dual-ball-f4bxwls9top"
);

window.addEventListener("load", () => {
  pageLoader.style.display = "none";
});

// intersection observer
let items = document.querySelectorAll(".services-item-content");

let Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      e.target.classList.toggle("show", e.isIntersecting);
      if (e.isIntersecting) {
        Observer.unobserve(e.target);
      }
    });
  },
  {
    threshold: 0,
  }
);
items.forEach((i) => {
  Observer.observe(i);
});
