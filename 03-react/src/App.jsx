import { Header } from "./components/Header/Header";
import { Search } from "./components/Search/Search";
import { Pagination } from "./components/Pagination/Pagination";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";
import { JobListings } from "./components/JobListingCard/JobListingCard";
import jobsData from './data.json'

const RESULTS_PER_PAGE = 5

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pagedResults = jobsData.slice(
    (currentPage - 1) * RESULTS_PER_PAGE, // Página 1 -> 0, página 2 -> 5, página 3 -> 10
    currentPage * RESULTS_PER_PAGE // Página 1 -> 5, página 1 -> 10, página 2 -> 15
  )

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
      <Header />
      <main>
        <Search />
        {/* <JobCard currentPage={currentPage}/> */}
        <JobListings jobs={pagedResults} />
        <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} />
      </main>
      <Footer />
    </>
  );
}

export default App;
