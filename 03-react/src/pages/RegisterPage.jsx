import { Register } from "../components/Register/Register";

export function RegisterPage() {
  return (
    <main>
      <section>
        <img src="./background.jpg" width="200" alt="Background" />
        <h1>¿Estás buscando empleo o tienes una empresa y buscas empleados?</h1>
        <p>
          Tenemos la mayor oferta y demanda de profesionales en el sector IT de
          España. Encuentra el trabajo de tus sueños uniéndote a nuestra
          plataforma
        </p>
        <a href="#register">
          <strong>¡REGISTRATE YA!</strong>
        </a>
      </section>

      <section>
        <header>
          <h2>Encuentra el trabajo de tus sueños</h2>
          <article>
            <p>
              Encontrar empleo en el sector de la programación requiere algo más
              que enviar currículums: necesitas visibilidad estratégica,
              oportunidades relevantes y procesos eficientes. Nuestra plataforma
              está diseñada específicamente para profesionales tech que quieren
              avanzar en su carrera.
            </p>
          </article>
          <h2>
            Encuentra el profesional que lleve a tu empresa al siguiente nivel
          </h2>
          <article>
            <p>
              Contratar talento tecnológico no es solo cubrir una vacante: es
              incorporar perfiles que aporten valor real al producto y al
              negocio. Nuestra plataforma está enfocada exclusivamente en el
              sector IT, lo que garantiza mayor precisión en el proceso de
              selección.
            </p>
          </article>
        </header>
      </section>

      <Register />

    </main>
  );
}
