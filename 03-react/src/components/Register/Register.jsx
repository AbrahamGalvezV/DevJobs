import { useState } from "react";
import "./Regiser.css";

export function Register() {
    const [formData, setFromData] = useState({
        nombre: "",
        apellidos: "",
        correo: "",
        password: "",
        tipo: "empleo",
        telefono: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFromData((prev) => ({
            ...prev,
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Estado actual del formulario");
        console.log(formData);      
    }

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
              required
            />
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
              required
            />
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
              required
              />
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
              required
            />
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
          </label>
        </div>

        <button type="submit">Enviar</button>

      </form>
    </section>
  );
}
