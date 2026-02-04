document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".background-video-wrapper video");

  if (!video) return;

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    video.style.transform = `
      scale(1.05)
      translate(${x * 10}px, ${y * 10}px)
    `;
  });
});
