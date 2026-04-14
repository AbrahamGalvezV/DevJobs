import { Route, Routes } from "react-router";
import { lazy, Suspense} from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const NotFoundPage = lazy(() => import("./pages/404"));
const JobDetail = lazy(() => import("./pages/Detail"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

function App() {

  return (
    <>
      <Header />
      <Suspense
        fullback={
          <div
            style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1rem" }}
          >
            Crgando...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/contacto" element={<RegisterPage />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
