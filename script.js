document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const trigger = item.querySelector(".accordion-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  const benefitsList = document.querySelector("[data-collapsible]");
  const toggleButton = document.querySelector('[data-toggle="benefits"]');

  if (benefitsList && toggleButton) {
    benefitsList.classList.add("collapsed");
    toggleButton.addEventListener("click", () => {
      const collapsed = benefitsList.classList.toggle("collapsed");
      toggleButton.textContent = collapsed ? "Дагы көрүү" : "Жашыруу";
    });
  }
});
