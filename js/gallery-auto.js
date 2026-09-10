// =====================================================
// CONTEO AUTOMÁTICO DE IMÁGENES POR GALERÍA
// Cuenta cuántas <figure> hay dentro de cada .gallery
// y le agrega data-count="N" — el CSS reacciona a ese número.
// No requiere tocar nada manualmente al agregar/quitar imágenes.
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gallery").forEach(gallery => {
    const count = gallery.querySelectorAll(":scope > figure").length;
    gallery.dataset.count = count;
  });
});