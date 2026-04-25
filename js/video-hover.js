// =========================
// VIDEO PLAY ON HOVER
// =========================
/*
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



document.querySelectorAll(".allprojects-card").forEach(card => {
  const video = card.querySelector("video");

  if (!video) return;

  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
*/


document.querySelectorAll(".project-card").forEach(card => {

  const media = card.querySelector(".project-hover-media");

  if (!media) return;

  // SOLO si es video
  if (media.tagName === "VIDEO") {

    card.addEventListener("mouseenter", () => {
      media.currentTime = 0;
      media.play();
    });

    card.addEventListener("mouseleave", () => {
      media.pause();
      media.currentTime = 0;
    });

  }

});

document.querySelectorAll(".allprojects-card").forEach(card => {
  const video = card.querySelector("video");

  if(!video) return;

  card.addEventListener("mouseenter", () => {
    video.currentTime = 0;
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
  });
});
