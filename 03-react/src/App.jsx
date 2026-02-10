import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NofFoundPage } from "./pages/404";

import { HomePage } from "./pages/HomePage"
import { SearchPage } from "./pages/SearchPage";



function App() {

  const currentPath = window.location.pathname

  let page = <NofFoundPage />
  if (currentPath === '/') {
    page = <HomePage />
  } else if (currentPath === '/search') {
    page = <SearchPage />
  }

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
}

export default App;
