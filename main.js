// ====== Mobile Menu Toggle ======
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });
}

// ====== Scroll Animation ======
const faders = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

faders.forEach((el) => observer.observe(el));

// ====== AOS Init (if you load AOS) ======
if (typeof AOS !== "undefined") {
  AOS.init();
}
