/* CURSOR */
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX - 14 + "px";
  cursor.style.top = e.clientY - 14 + "px";
  dot.style.left = e.clientX - 3 + "px";
  dot.style.top = e.clientY - 3 + "px";
});

/* SOUNDS */
const hover = document.getElementById("hoverSound");
const click = document.getElementById("clickSound");

document.querySelectorAll("li, .panel").forEach(el=>{
  el.onmouseenter = ()=>hover.play().catch(()=>{});
  el.onclick = ()=>click.play().catch(()=>{});
});

/* INTRO */
window.onload = ()=>{
  document.getElementById("introSound").play().catch(()=>{});
  setTimeout(()=>{
    const intro=document.getElementById("intro");
    intro.style.opacity=0;
    setTimeout(()=>intro.remove(),800);
    document.querySelectorAll(".hidden").forEach(e=>{
      e.style.opacity=1;
      e.style.transform="none";
    });
  },3200);
};

/* SCROLL + PARALLAX */
const panels = document.querySelectorAll(".panel");
window.addEventListener("scroll", ()=>{
  panels.forEach(p=>{
    const top=p.getBoundingClientRect().top;
    if(top<innerHeight-120) p.classList.add("active");
  });

  document.querySelectorAll(".parallax").forEach(el=>{
    el.style.setProperty("--offset", window.scrollY * -0.15 + "px");
  });
});
