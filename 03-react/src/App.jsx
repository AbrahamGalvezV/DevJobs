import { Header } from "./components/Header/Header";
import { JobCard } from "./components/JobCard/JobCard";
import { Search } from "./components/Search/Search";
import { Pagination } from "./components/Pagination/Pagination";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(page);
  }

  return (
    <>
      <Header />
      <main>
        <Search />
        <JobCard currentPage={currentPage}/>
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
