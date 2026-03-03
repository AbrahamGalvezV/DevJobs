import { useState } from "react";

export function useRegisterForm(onSuccess) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    password: "",
    tipo: "empleo",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    if (!formData.apellidos.trim()) {
      newErrors.apellidos = "Los apellidos son obligatorios";
    }

    if (!formData.correo) {
      newErrors.correo = "El correo es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.correo)) {
      newErrors.correo = "Correo inválido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 6) {
      newErrors.password = "Debe tener al menos 6 caracteres";
    }

    if (formData.telefono && !/^[0-9]{9,15}$/.test(formData.telefono)) {
      newErrors.telefono = "Teléfono inválido";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    if (onSuccess) onSuccess(formData);
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}