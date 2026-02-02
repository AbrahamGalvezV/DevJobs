

export function Search() {
  return (
    <section className="jobs-search">
      <h1>Encuentra tu proximo trabajo</h1>
      <p>Explora miles de oportunidades en el sector tecnológico</p>
      <form role="search">
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
            id="empleos-search-input"
            required
            type="text"
            placeholder="Busca trabajos, empresas o habilidades"
          />
        </div>
        <div className="search_filters">
          <select name="technology" id="filter-technology">
            <option value="">Tecnología</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="node">Node</option>
            <option value="react">React</option>
          </select>
          <select name="location" id="filter-location">
            <option value="">Ubicación</option>
            <option value="remoto">Remoto</option>
            <option value="cdmx">Ciudad De México</option>
            <option value="guadalajara">Guadalajara</option>
            <option value="monterrey">Monterrey</option>
            <option value="granada">Granada</option>
          </select>
          <select name="experience-level" id="experience-level">
            <option value="">Nivel de experiencia</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-level</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
        </div>
      </form>
      <span id="filter-selected-value"></span>
    </section>
  );
}
