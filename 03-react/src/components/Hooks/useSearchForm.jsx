import { useState } from "react";


export const useSearchForm = ({ idTechnology, idLocation, idExperienceLevel, onSearch, onTextFilter }) => {
  const [searchText, setSearchText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const filters = {
      technology: formData.get(idTechnology),
      location: formData.get(idLocation),
      experienceLevel: formData.get(idExperienceLevel)
    };

    onSearch(filters)
  };

  const handleTextChange = (e) => {
    const text = e.target.value
    onTextFilter(text)
    setSearchText(text)
  }

  return {
    searchText,
    handleSubmit,
    handleTextChange
  }
}