import { useId } from "react";

export function Search ({ onSearch, onTextfilter }) {
  const idText = useId();
  const idTechnology = useId();
  const idLocation = useId();
  const idExperienceLevel = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const filters = {
      search: formData.get(idText),
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel),
    };

    onSearch(filters)
  };

  const handleTextChange = (e) => {
    const text = e.target.value
    onTextfilter(text)
  }


  return (
    <section className="jobs-search">
      <h1>Encuentra tu proximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico</p>

      <form onSubmit={handleSubmit} id="empleos-search" role="search">
        <div className="search-bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>

          <input
            name={idText}
            id="empleos-search-input"
            required
            type="text"
            placeholder="Busca trabajos, empresas o habilidades"
            onChange={handleTextChange}
          />
          <button type="submit">Buscar</button>
        </div>

        <div className="search_filters">
          <select
            name={idTechnology}
            id="filter-technology"
            // value={filters.technology}
            // onChange={handleChange}
          >
            <option value="">Tecnología</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="node">Node</option>
            <option value="react">React</option>
          </select>

          <select
            name={idLocation}
            id="filter-location"
            // value={filters.location}
            // onChange={handleChange}
          >
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad De México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="granada">Granada</option>
          </select>

          <select
            name={idExperienceLevel}
            id="experience-level"
            // value={filters.experience}
            // onChange={handleChange}
          >
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
    </section>
  );
}
