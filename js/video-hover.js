// =========================
// VIDEO PLAY ON HOVER
// =========================

// Seleccionamos todas las cards de proyecto
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {
  const video = card.querySelector(".project-video");

  // Al entrar el mouse
  card.addEventListener("mouseenter", () => {
    if (video) {
      video.currentTime = 0; // vuelve al inicio
      video.play();
    }
  });

  // Al salir el mouse
  card.addEventListener("mouseleave", () => {
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  });
});