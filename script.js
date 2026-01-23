document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".button-apply-job");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      boton.textContent = "¡Aplicado!";
      boton.classList.add("is-applied");
      boton.disabled = true;
    });
  });

  const filterLocation = document.querySelector("#filter-location");
  const filterTechnology = document.querySelector("#filter-technology");
  const filterExperience = document.querySelector("#experience-level");

  const mensaje = document.querySelector("#filter-selected-value");
  const jobs = document.querySelectorAll(".job-listing-card");

  function filterJobs() {
    const locationValue = filterLocation.value;
    const technologyValue = filterTechnology.value;
    const experienceValue = filterExperience.value;

    mensaje.textContent = `
    ${technologyValue || "Todas las tecnologías"} · 
    ${locationValue || "Todas las ubicaciones"} · 
    ${experienceValue || "Todos los niveles"}
  `;

    jobs.forEach((job) => {
      const jobLocation = job.dataset.modalidad;
      const jobTechnology = job.dataset.technology;
      const jobExperience = job.dataset.experience;

      const matchLocation = !locationValue || locationValue === jobLocation;

      const matchTechnology =
        !technologyValue || technologyValue === jobTechnology;

      const matchExperience =
        !experienceValue || experienceValue === jobExperience;

      job.style.display =
        matchLocation && matchTechnology && matchExperience ? "flex" : "none";
    });
  }

  filterLocation.addEventListener("change", filterJobs);
  filterTechnology.addEventListener("change", filterJobs);
  filterExperience.addEventListener("change", filterJobs);
});


