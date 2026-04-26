document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".allprojects-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // Quitar activo anterior
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter; 
      // ← usa data-filter del botón (no el texto visible)

      cards.forEach(card => {

        const tags = card.dataset.category; // ej: "animacion unity"

        if (filter === "all") {
          card.style.display = "block";
        }
        else if (tags.includes(filter)) {
          card.style.display = "block";
        }
        else {
          card.style.display = "none";
        }

      });

    });
  });
});

