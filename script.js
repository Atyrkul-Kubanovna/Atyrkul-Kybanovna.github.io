document.addEventListener("DOMContentLoaded", () => {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");

  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const isOpen = item.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen);
    });
  });

  const resultsToggle = document.querySelector('[data-toggle="results"]');
  const resultsList = document.querySelector("[data-collapsible]");

  if (resultsToggle && resultsList) {
    resultsToggle.addEventListener("click", () => {
      const collapsed = resultsList.classList.toggle("collapsed");
      resultsToggle.textContent = collapsed ? "Көбүрөөк" : "Жашыруу";
    });
  }

  const form = document.getElementById("lead-form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      alert("Рахмат! Биз сиз менен байланышабыз.");
      form.reset();
    });
  }
});
