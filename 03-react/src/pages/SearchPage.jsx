import { Pagination } from "../components/Pagination/Pagination";
import { JobListings } from "../components/JobListingCard/JobListingCard";
import { Search } from "../components/Search/Search"

import jobsData from "../data.json";
import { useState } from "react";

const RESULTS_PER_PAGE = 5;

export function SearchPage() {
  const [filters, setFilters] = useState({
    technology: "",
    location: "",
    experienceLevel: "",
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter((job) => {
    return (
      (filters.technology === "" ||
        job.data.technology === filters.technology) &&
      (filters.location === "" || job.data.modalidad === filters.location) &&
      (filters.experienceLevel === "" ||
        job.data.nivel === filters.experienceLevel)
    );
  });

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters);
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return (
    <main>
      <Search onSearch={handleSearch} onTextFilter={handleTextFilter} />
      <section>
        <JobListings jobs={pagedResults} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
