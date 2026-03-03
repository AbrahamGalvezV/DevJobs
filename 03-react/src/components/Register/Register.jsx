import { useRegisterForm } from "../Hooks/useRegisterForm"
import "./Regiser.css";



export function Register() {
  const { formData, errors, handleChange, handleSubmit } =
    useRegisterForm  ((data) => {
      console.log("Formulario válido:", data);
      
    })

  return (
    <section className="register">
      <h2 id="register">Registrate ya</h2>

      <form onSubmit={handleSubmit} className="register__form">
        <div>
          <label className="register__label">
            Nombre:
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="register__input"
              placeholder="Escriba su nombre"
            />
            {errors.nombre && <p className="error">errors.nombre</p>}
          </label>
        </div>

        <div>
          <label className="register__label">
            Apellidos:
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              className="register__input"
              placeholder="Escriba su Apellido"
            />
            {errors.apellidos && <p className="error">errors.apellidos</p>}
          </label>
        </div>

        <div>
          <label className="register__label">
            Email:
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="register__input"
              placeholder="Escriba su email"
            />
            {errors.correo && <p className="error">errors.correo</p>}
          </label>
        </div>

        <div>
          <label className="register__label">
            Contraseña:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="register__input"
              placeholder="Escriba su contraseña"
            />
            {errors.password && <p className="error">errors.password</p>}
          </label>
        </div>

        <select
          className="register__selector"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
        >
          <option value="">Categoría</option>
          <option value="empleo">Busco empleo</option>
          <option value="reclutador">Busco desarrollador</option>
        </select>

        <div>
          <label className="register__label">
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="register__input"
              placeholder="Escriba su teléfono"
            />
            {errors.telefono && <p className="error">errors.telefono</p>}
          </label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
