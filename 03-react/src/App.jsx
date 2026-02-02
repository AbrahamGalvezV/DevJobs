import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { JobCard } from "./components/JobCard/JobCard";
import { Pagination } from "./components/Pagination/Pagination";
import { Search } from "./components/Search/Search";

function App() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <JobCard />
        <Pagination />
      </main>
      <Footer />
    </>
  );
}

export default App;
