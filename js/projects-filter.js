document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".allprojects-card");
  const select = document.getElementById("filterSelect");

  // Función única que filtra las tarjetas, usada por botones y por el select
  function aplicarFiltro(filter){
    cards.forEach(card => {
      const tags = card.dataset.category; // ej: "animacion unity"

      if (filter === "all" || tags.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  // ===== BOTONES (desktop) =====
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      aplicarFiltro(filter);

      // Mantiene sincronizado el select por si el usuario cambia de tamaño de pantalla
      if (select) select.value = filter;
    });
  });

  // ===== SELECT (mobile) =====
  if (select) {
    select.addEventListener("change", () => {
      const filter = select.value;
      aplicarFiltro(filter);

      // Sincroniza el estado "active" de los botones también
      buttons.forEach(b => b.classList.remove("active"));
      const matchingBtn = document.querySelector(`.filter[data-filter="${filter}"]`);
      if (matchingBtn) matchingBtn.classList.add("active");
    });
  }

});

