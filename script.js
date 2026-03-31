function openModalCpp() {
    document.getElementById('modal-cpp').style.display = 'block';
}
function closeModalCpp() {
    document.getElementById('modal-cpp').style.display = 'none';
}

// 他のモーダルも同様
function openModalMain() {
    document.getElementById('modal-main').style.display = 'block';
}
function closeModalMain() {
    document.getElementById('modal-main').style.display = 'none';
}
function openModalEnemy() {
    document.getElementById('modal-enemy').style.display = 'block';
}
function closeModalEnemy() {
    document.getElementById('modal-enemy').style.display = 'none';
}
function openModalPoke() {
    document.getElementById('modal-poke').style.display = 'block';
}
function closeModalPoke() {
    document.getElementById('modal-poke').style.display = 'none';
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
