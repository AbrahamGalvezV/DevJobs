import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { NotFoundPage } from "./pages/404";

import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";

import { useEffect, useState } from "react";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  console.log(currentPath);
  

  let page = <NotFoundPage />;

  if (currentPath === "/") {
    page = <HomePage />;
  } else if (currentPath === "/search") {
    page = <SearchPage />;
  }

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [])

  return (
    <>
      <Header />
      {page}
      <Footer />
    </>
  );
}

export default App;
