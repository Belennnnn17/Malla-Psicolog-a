// script.js

document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  const ramoMap = {};
  ramos.forEach(ramo => {
    ramoMap[ramo.id] = ramo;
    ramo.disabled = ramo.dataset.prereqs !== "";
  });

  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (!ramo.disabled) {
        ramo.classList.toggle("aprobado");

        ramos.forEach(other => {
          if (other.dataset.prereqs) {
            const prereqs = other.dataset.prereqs.split(",");
            const allMet = prereqs.every(id => ramoMap[id].classList.contains("aprobado"));
            other.disabled = !allMet;
          }
        });
      }
    });
  });
});

