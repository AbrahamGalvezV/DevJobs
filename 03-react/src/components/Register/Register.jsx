import "./Regiser.css";

export function Register() {
  return (
    <section className="register">
      <h2 id="register">Registrate ya</h2>
      <form method="post" action="/" className="register__form">
        <div>
          <label className="register__label">
            Nombre:
            <input
              className="register__input"
              type="text"
              name="name"
              placeholder="Escriba su nombre"
              required
            />
          </label>
        </div>

        <div>
          <label className="register__label">
            Email:
            <input
              className="register__input"
              type="email"
              name="email"
              placeholder="Escriba su email"
              required
            />
          </label>
        </div>
        <div>
          <label className="register__label">
            Teléfono:
            <input
              className="register__input"
              type="tel"
              name="telefono"
              placeholder="Escriba su teléfono"
            />
          </label>
        </div>
      </form>
    </section>
  );
}
