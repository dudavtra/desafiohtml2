
// 1. Efeito 3D Tilt na imagem ao mover o mouse
const tiltCard = document.getElementById('tilt-card');
document.addEventListener('mousemove', (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  tiltCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 2. Modo Surreal (Alto Contraste)
function toggleSurrealMode() {
  document.body.classList.toggle('surreal-mode');
  const btn = document.getElementById('contrast-btn');
  if (document.body.classList.contains('surreal-mode')) {
    btn.textContent = '☀️ Voltar ao Plano Normal';
  } else {
    btn.textContent = '👁️ Alterar Realidade';
  }
}

// 3. Acordeão Interativo
function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = content.classList.contains('open');

  document.querySelectorAll('.accordion-content').forEach(item => {
    item.classList.remove('open');
  });

  if (!isOpen) {
    content.classList.add('open');
  }
}

// 4. Canvas Interativo de Fundo (Rastro de partículas no cursor)
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.05;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

window.addEventListener('mousemove', (e) => {
  for (let i = 0; i < 2; i++) {
    particles.push(new Particle(e.x, e.y));
  }
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].size <= 0.2) {
      particles.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();