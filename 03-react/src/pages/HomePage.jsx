export function HomePage() {
  return (
    <main>
      <section>
        <img src="./background.jpg" width="200" alt="Background" />

        <h1>Encuentra el trabajo de tus sueños</h1>

        <p>
          Únete a la comunidad más grande de desarrolladores y encuentra tu
          próxima oportunidad.
        </p>

        <form role="search">
          <div>
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
              required
              type="text"
              placeholder="Buscar empleos por título, habilidad o empresa"
            />

            <button disabled type="submit">
              Buscar
            </button>
          </div>
        </form>
      </section>

      <section>
        <header>
          <h2>¿Por qué DevJobs?</h2>
          <p>
            DevJobs es la principal plataforma de búsqueda de empleo para
            desarrolladores. Conectamos a los mejores talentos con las
            empresas más innovadoras.
          </p>
        </header>

        <footer>
          <article>
            <h3>Encuentra el trabajo de tus sueños</h3>
            <p>
              Busca miles de empleos de las mejores empresas de todo el mundo.
            </p>
          </article>

          <article>
            <h3>Conecta con las mejores empresas</h3>
            <p>
              Conecta con empresas que están contratando por tus habilidades.
            </p>
          </article>

          <article>
            <h3>Obtén el salario que mereces</h3>
            <p>
              Obtén el salario que mereces con nuestra calculadora de salarios.
            </p>
          </article>
        </footer>
      </section>

      <section>
        <h2>Formulario de contacto</h2>

        <form method="post" action="/">
          <fieldset>
            <legend>Información personal</legend>

            <div>
              <label>
                Nombre:
                <input
                  type="text"
                  name="name"
                  placeholder="Escriba su nombre"
                  required
                />
              </label>
            </div>

            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Escriba su email"
                  required
                />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Teléfono</legend>

            <div>
              <label>
                Teléfono:
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Escriba su teléfono"
                />
              </label>
            </div>
          </fieldset>
        </form>
      </section>
    </main>
  );
}
