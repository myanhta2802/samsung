document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".highlight-card");
  
    cards.forEach((card) => {
      const btn = card.querySelector(".highlight-more");
      if (!btn) return;
  
      btn.addEventListener("click", () => {
        card.classList.toggle("expanded");
        if (card.classList.contains("expanded")) {
          btn.textContent = "Show less";
        } else {
          btn.textContent = "Learn more";
        }
      });
    });
  });
  