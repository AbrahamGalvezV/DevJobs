import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NotFoundPage } from "./pages/404";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contacto" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
