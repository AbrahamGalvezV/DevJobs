import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Pagination } from "./components/Pagination/Pagination";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { JobListings } from "./components/JobListingCard/JobListingCard";
import jobsData from "./data.json";
const RESULTS_PER_PAGE = 5;

function App() {
  const [textToFilter, setTextToFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const jobsWithTextFilter =
    textToFilter === ""
      ? jobsData
      : jobsData.filter((job) =>
          job.titulo.toLowerCase().includes(textToFilter.toLowerCase()),
        );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE);

  const pagedResults = jobsWithTextFilter.slice(
    (currentPage - 1) * RESULTS_PER_PAGE,
    currentPage * RESULTS_PER_PAGE,
  );

  const handleTextFilter = (newTextToFilter) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <main>
        <Search onTextFilter={handleTextFilter} />
        <JobListings jobs={pagedResults} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
