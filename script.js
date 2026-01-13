function openModalMain() {
  document.getElementById("modal-main").classList.add("active");
}
function closeModalMain() {
  document.getElementById("modal-main").classList.remove("active");
}

function openModalEnemy() {
  document.getElementById("modal-enemy").classList.add("active");
}
function closeModalEnemy() {
  document.getElementById("modal-enemy").classList.remove("active");
}

// scroll animation
const targets = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
  targets.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
