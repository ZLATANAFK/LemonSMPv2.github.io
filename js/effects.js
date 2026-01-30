/* CURSOR */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* INTRO CINEMATIC */
window.onload = () => {
  const intro = document.getElementById("intro");
  const sound = document.getElementById("introSound");
  sound.volume = 0.5;
  sound.play().catch(()=>{});

  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.remove();
      document.querySelectorAll(".hidden").forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, 800);
  }, 3000);
};

/* SCROLL REVEAL */
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach(c => {
    if (c.getBoundingClientRect().top < window.innerHeight - 120) {
      c.classList.add("active");
    }
  });
});

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    dx: Math.random()-0.5,
    dy: Math.random()-0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;

    ctx.fillStyle = "#22c55e";
    ctx.fillRect(p.x, p.y, 2, 2);
  });
  requestAnimationFrame(animate);
}
animate();

window.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};
