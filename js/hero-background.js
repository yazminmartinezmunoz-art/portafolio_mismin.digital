document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".hero-bg-media");
  if (!bg) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  // scaleX(-1) primero para mantener el espejo, luego el efecto parallax normal
  bg.style.transform = `
    scaleX(-1)
    scale(1.08)
    translate(${x * -14}px, ${y * 14}px)
  `;
  // nota: x invertido (*-14) porque al espejar el video, el movimiento horizontal
  // del mouse también queda invertido visualmente — esto lo corrige.
});
