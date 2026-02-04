import data from "../../data.json";
import { useState } from "react";
import "./JobCard.css"

export function JobCard() {
  return (
    <section className="job-listings">
      <h2>Resultados de busqueda</h2>

      {data.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
    </section>
  );
}

function JobItem({ job }) {
  const [isApplied, setIsApplied] = useState(false);

  const { titulo, empresa, ubicacion, descripcion } = job;

  return (
    <article className="job-listing-card">
      <div>
        <h3>{titulo}</h3>
        <small>
          {empresa} - {ubicacion} - ¿He aplicado? {isApplied ? "Sí" : "No"}
        </small>
        <p>{descripcion}</p>
      </div>

      <button
        className={`button-apply-job ${isApplied ? "is-applied" : ""}`}
        onClick={() => setIsApplied(!isApplied)}
      >
        {isApplied ? "Aplicado" : "Aplicar"}
      </button>
    </article>
  );
}
