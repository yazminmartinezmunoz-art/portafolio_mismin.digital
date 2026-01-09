// =========================
// VIDEO PLAY ON HOVER
// =========================

document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".project-card").forEach(card => {
    const video = card.querySelector(".project-video");
    if (!video) return;

    card.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });
  });

});
