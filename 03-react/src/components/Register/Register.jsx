import "./Regiser.css";

export function Register() {

  return (
    <section className="form-section">
      <h2 id="register">Registrate ya</h2>
      <form method="post" action="/">
        <div>
          <label className="form-label">
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
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Escriba su email"
              required
            />
          </label>
        </div>
        <div>
          <label className="form-label">
            Teléfono:
            <input
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
