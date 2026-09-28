const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.getElementById("year").textContent = new Date().getFullYear();

// Ribbon tabs
document.querySelectorAll(".ribbon-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const panel = tab.dataset.panel;

    document.querySelectorAll(".ribbon-tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".ribbon-panel").forEach((p) => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(`ribbon-${panel}`).classList.add("active");
  });
});
