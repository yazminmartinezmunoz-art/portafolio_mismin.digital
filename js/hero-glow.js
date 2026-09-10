// =====================================================
// BRILLO QUE SIGUE AL CURSOR EN TODA LA PÁGINA
// =====================================================
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".hero-glow");
  if (!glow) return;

  glow.style.setProperty("--gx", `${e.clientX}px`);
  glow.style.setProperty("--gy", `${e.clientY}px`);
});