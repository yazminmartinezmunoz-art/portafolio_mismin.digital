document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".hero-bg-media");
  if (!bg) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  bg.style.transform = `
    scale(1.08)
    translate(${x * 14}px, ${y * 14}px)
  `;
});
