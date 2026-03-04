import { Pagination } from "../components/Pagination/Pagination";
import { JobListings } from "../components/JobListingCard/JobListingCard";
import { Search } from "../components/Search/Search";
import { useFilters } from "../components/Hooks/useFilter";
import { useEffect } from "react";

export function SearchPage() {
  const {
    jobs,
    total, 
    loading,
    totalPages,
    currentPage,
    handleSearch,
    handleTextFilter,
    handlePageChange,
  } = useFilters();

  useEffect(() => {
    document.title = `Resutados: ${total}, Página ${currentPage} - DevJobs`;
  }, [total, currentPage]);

  return (
    <main>
      <Search onSearch={handleSearch} onTextFilter={handleTextFilter} />
      <section>
        {
          loading ? <p>Cargando empleos...</p> : <JobListings jobs={jobs} />
        }
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </main>
  );
}
