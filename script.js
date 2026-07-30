function openModalCpp() { document.getElementById('modal-cpp').style.display = 'block'; }
function closeModalCpp() { document.getElementById('modal-cpp').style.display = 'none'; }
function openModalMain() { document.getElementById('modal-main').style.display = 'block'; }
function closeModalMain() { document.getElementById('modal-main').style.display = 'none'; }
function openModalEnemy() { document.getElementById('modal-enemy').style.display = 'block'; }
function closeModalEnemy() { document.getElementById('modal-enemy').style.display = 'none'; }
function openModalPoke() { document.getElementById('modal-poke').style.display = 'block'; }
function closeModalPoke() { document.getElementById('modal-poke').style.display = 'none'; }
function openModalMazeEditor() { document.getElementById('modal-maze-editor').style.display = 'block'; }
function closeModalMazeEditor() { document.getElementById('modal-maze-editor').style.display = 'none'; }

document.addEventListener('click', (event) => {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.left = event.clientX + 'px';
  ripple.style.top = event.clientY + 'px';
  document.body.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 650);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelectorAll('.modal').forEach((modal) => { modal.style.display = 'none'; });
  }
});

document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) modal.style.display = 'none';
  });
});

const canvas = document.getElementById('mazeCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];
function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const count = Math.min(42, Math.floor(window.innerWidth / 28));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    size: 2 + Math.random() * 3
  }));
}
function drawMazeParticles() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(98,247,255,0.18)';
  ctx.fillStyle = 'rgba(98,247,255,0.55)';
  particles.forEach((p, i) => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    for (let j = i + 1; j < particles.length; j++) {
      const q = particles[j];
      const dx = p.x - q.x, dy = p.y - q.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        ctx.globalAlpha = (120 - dist) / 120;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        ctx.globalAlpha = 1;
      }
    }
  });
  requestAnimationFrame(drawMazeParticles);
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
drawMazeParticles();