// =====================================================
// MODAL GLOBAL MEJORADO (reemplaza las funciones locales)
// - Cierra al hacer clic FUERA de la imagen/video
// - Muestra flechas ‹ › si hay más de una imagen en la galería
// - También funciona con las flechas del teclado y Escape
// =====================================================

let currentGallery = [];   // imágenes de la galería que está abierta
let currentIndex = -1;     // cuál de esas imágenes se está mostrando

function openModalImage(src, el) {
  const modal = document.getElementById("modal");

  // Si la imagen clickeada está dentro de una <section class="gallery">,
  // junta TODAS las imágenes de esa sección para poder navegar entre ellas
  const gallerySection = el ? el.closest(".gallery") : null;

  if (gallerySection) {
    currentGallery = Array.from(gallerySection.querySelectorAll("figure img"));
    currentIndex = currentGallery.indexOf(el);
  } else {
    currentGallery = [];
    currentIndex = -1;
  }

  renderModalImage(src);
  modal.style.display = "flex";
}

function renderModalImage(src) {
  document.getElementById("modal-content").innerHTML = `<img src="${src}">`;
  updateModalArrows();
}

function updateModalArrows() {
  const modal = document.getElementById("modal");
  modal.querySelectorAll(".modal-arrow").forEach(a => a.remove()); // limpia flechas previas

  if (currentGallery.length > 1) {
    const prev = document.createElement("span");
    prev.className = "modal-arrow modal-arrow-prev";
    prev.innerHTML = "‹";
    prev.onclick = (e) => { e.stopPropagation(); moveModalImage(-1); };

    const next = document.createElement("span");
    next.className = "modal-arrow modal-arrow-next";
    next.innerHTML = "›";
    next.onclick = (e) => { e.stopPropagation(); moveModalImage(1); };

    modal.appendChild(prev);
    modal.appendChild(next);
  }
}

function moveModalImage(direction) {
  if (currentGallery.length === 0) return;
  currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
  renderModalImage(currentGallery[currentIndex].src);
}

// Sobrescribe el cierre para que también resetee la galería activa
function closeModal() {
  const content = document.getElementById("modal-content");
  const video = content.querySelector("video");
  if (video) { video.pause(); video.currentTime = 0; }

  document.getElementById("modal").style.display = "none";
  currentGallery = [];
  currentIndex = -1;
}

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  if (!modal) return;

  // Clic FUERA de la imagen (en el fondo oscuro) = cerrar
  modal.addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });

  // Teclado: ← → para navegar, Esc para cerrar
  document.addEventListener("keydown", (e) => {
    if (modal.style.display !== "flex") return;
    if (e.key === "ArrowRight") moveModalImage(1);
    if (e.key === "ArrowLeft") moveModalImage(-1);
    if (e.key === "Escape") closeModal();
  });
});