document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".allprojects-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // quitar activo anterior
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.textContent.toLowerCase();

      cards.forEach(card => {

        const tags = card.dataset.category; // "personajes props"

        if (category === "todos" || tags.includes(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });
  });
});
