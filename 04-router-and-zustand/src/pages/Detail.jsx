import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "../components/Link";

import styles from "./detail.module.css";
import snarkdown from "snarkdown";

function JobSelection({ title, content }) {
  const html = snarkdown(content);

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div className={`${styles.sectionContent} prose`} dangerouslySetInnerHTML={{
        __html: html
      }} />
 

    </section>
  );
}

export default function JobDetail() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Job Nor Found");
        return response.json();
      })
      .then((data) => {
        setJob(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return (
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div className={styles.loading}>
          <p className={styles.loadingText}>Cargando...</p>
        </div>
      </div>
    );
  }
  if (error || !job) {
    return (
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
        <div className={styles.error}>
          <h2 className={styles.errorTitle}>Oferta no encontrada</h2>
          <button onClick={() => navigate("/")} className={styles.errorButton}>
            Volver a inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link href="/search" className={styles.breadcrumbButton}>
            Empleos
          </Link>
          <span className="styles.breadcrumbSeparator">/</span>
          <span className="styles.breadcrumbCurrent">{job.titulo}</span>
        </nav>
      </div>

      <header className={styles.header}>
        <h1 className={styles.title}>{job.titulo}</h1>
        <p className={styles.meta}>
          {job.empresa} · {job.ubicacion}
        </p>
      </header>

      <button className={styles.applyButton}>Aplicar ahora</button>

      <JobSelection
        title="Descripción del puesto"
        content={job.content.description}
      />
      <JobSelection
        title="Responsabilidades"
        content={job.content.responsibilities}
      />
      <JobSelection title="Requisitos" content={job.content.requirements} />
      <JobSelection title="Acerca de la empresa" content={job.content.about} />
    </div>
  );
}
