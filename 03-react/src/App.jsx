import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Pagination } from "./components/Pagination/Pagination";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { JobListings } from "./components/JobListingCard/JobListingCard";
import jobsData from "./data.json";
const RESULTS_PER_PAGE = 5;

function App() {
  const [filters, setFilters] = useState({
    technology: '',
    location: '',
    experienceLevel: '',
  });
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsFilteredByFilters = jobsData.filter(job => {
    return (
      (filters.technology === '' || job.data.technology === filters.technology)
      
    )
    })
    

  const jobsWithTextFilter = textToFilter === ""
      ? jobsFilteredByFilters
      : jobsFilteredByFilters.filter((job) => {
          return job.titulo.toLowerCase().includes(textToFilter.toLowerCase());
        });

  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters) => {
    setFilters(filters)
    setCurrentPage(1);
  };

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
