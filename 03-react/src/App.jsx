import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { useRouter } from "./components/Hooks/useRouter";
import { NotFoundPage } from "./pages/404";

import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";



function App() {
  const { currentPath } = useRouter();

  let page = <NotFoundPage />;

  if (currentPath === "/") {
    page = <HomePage />;
  } else if (currentPath === "/search") {
    page = <SearchPage />;
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
