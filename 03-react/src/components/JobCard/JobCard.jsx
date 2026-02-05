// import data from "../../data.json";
// import { useState } from "react";
// import "./JobCard.css"

import { useState } from "react"

// export function JobCard() {
//   return (
//     <section className="job-listings">
//       <h2>Resultados de busqueda</h2>

//       {data.map((job, index) => (
//         <JobItem key={index} job={job} />
//       ))}
//     </section>
//   );
// }

// function JobItem({ job }) {
//   const [isApplied, setIsApplied] = useState(false);

//   const { titulo, empresa, ubicacion, descripcion } = job;

//   return (
//     <article className="job-listing-card">
//       <div>
//         <h3>{titulo}</h3>
//         <small>
//           {empresa} - {ubicacion} - ¿He aplicado? {isApplied ? "Sí" : "No"}
//         </small>
//         <p>{descripcion}</p>
//       </div>

//       <button
//         className={`button-apply-job ${isApplied ? "is-applied" : ""}`}
//         onClick={() => setIsApplied(!isApplied)}
//       >
//         {isApplied ? "Aplicado" : "Aplicar"}
//       </button>
//     </article>
//   );
// }



export function JobCard ({ job }) {
    const [isApplied, setIsApplied] = useState(false)
  
    const handleApplyClick = () => {
      setIsApplied(true)
    }

    const buttonClasses = isApplied ? 'button-apply-job is-applied' : 'button-apply-job'
    const buttonText = isApplied ? '¡Aplicado!' : 'Aplicar'

  return (
    <article 
      className="job-listing-card"
      data-modalidad={job.data.modalidad}
      data-nivel={job.data.nivel}
      data-technology={job.data.technology}
      >
        <div>
          <h3>{job.titulo}</h3>
          <small>{job.empresa} | {job.ubicacion}</small>
          <p>{job.descripcion}</p>
        </div>
        <button className={buttonClasses} onClick={handleApplyClick}>{buttonText}</button>
    </article>
  )
}






