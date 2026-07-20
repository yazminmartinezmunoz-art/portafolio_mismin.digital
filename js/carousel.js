// =========================
// CARRUSEL DE TARJETAS SECUNDARIAS
// =========================
// Una sola función genérica: sirve para cualquier cantidad de carruseles
// en la página, sin necesidad de IDs únicos por tarjeta.

function moveCarousel(btn, direction) {
  // Encuentra el carrusel más cercano al botón que se hizo clic
  const carousel = btn.closest(".carousel");
  const track = carousel.querySelector(".carousel-track");
  const slides = track.querySelectorAll(".carousel-slide");
  const total = slides.length;

  if (total <= 1) return; // nada que deslizar si hay una sola imagen

  // Lee el índice actual guardado en el propio elemento (data-index)
  let index = parseInt(track.dataset.index || "0", 10);

  // Suma o resta 1, y usa módulo para que sea un carrusel infinito (da la vuelta)
  index = (index + direction + total) % total;

  // Guarda el nuevo índice y mueve la cinta
  track.dataset.index = index;
  track.style.transform = `translateX(-${index * 100}%)`;
}