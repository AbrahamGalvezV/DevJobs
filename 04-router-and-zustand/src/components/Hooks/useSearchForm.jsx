import { useState, useRef } from "react";

export const useSearchForm = ({ idTechnology, idLocation, idExperienceLevel, idText, onSearch, onTextFilter }) => {
  const timeoutId = useRef(null)
  const [searchText, setSearchText] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    
    
    if (e.target.name === idText) {
      return // Ya lo manejamos en onChange 
    }
    
    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel)
    };

    onSearch(filters)
  };

  const handleTextChange = (e) => {
    const text = e.target.value
    // Actualiza el input inmediatamente
    setSearchText(text)

    // 2. Cancela el input anterior (si existe)
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    // 3. Crea un nuevo timeout
    timeoutId.current = setTimeout(() => {
      // 4. Ejecuta la búsqueda despues de 500ms
      onTextFilter(text)
    }, 500)
  }


  return {
    searchText,
    handleSubmit,
    handleTextChange
  }
}