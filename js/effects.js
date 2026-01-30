/* CURSOR */
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX - 15 + "px";
  cursor.style.top = e.clientY - 15 + "px";
  dot.style.left = e.clientX - 3 + "px";
  dot.style.top = e.clientY - 3 + "px";
});

/* SOUNDS */
const hover = document.getElementById("hoverSound");
const click = document.getElementById("clickSound");
document.querySelectorAll("li, .card").forEach(el => {
  el.onmouseenter = () => hover.play().catch(()=>{});
  el.onclick = () => click.play().catch(()=>{});
});

/* INTRO */
window.onload = () => {
  const intro = document.getElementById("intro");
  document.getElementById("introSound").play().catch(()=>{});

  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.remove();
      document.querySelectorAll(".hidden").forEach(e=>{
        e.style.opacity=1;
        e.style.transform="none";
      });
    },800);
  },3200);
};

/* SCROLL */
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach(c=>{
    if(c.getBoundingClientRect().top < innerHeight - 120){
      c.classList.add("active");
    }
  });
});

/* PARTICLES CONNECT */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let p = [];
for(let i=0;i<90;i++){
  p.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,dx:Math.random()-0.5,dy:Math.random()-0.5});
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  p.forEach(a=>{
    a.x+=a.dx; a.y+=a.dy;
    if(a.x<0||a.x>canvas.width) a.dx*=-1;
    if(a.y<0||a.y>canvas.height) a.dy*=-1;

    ctx.fillStyle="#22c55e";
    ctx.fillRect(a.x,a.y,2,2);

    p.forEach(b=>{
      let d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<120){
        ctx.strokeStyle="rgba(34,197,94,0.15)";
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    });
  });
  requestAnimationFrame(draw);
}
draw();

window.onresize=()=>{
  canvas.width=innerWidth;
  canvas.height=innerHeight;
};
