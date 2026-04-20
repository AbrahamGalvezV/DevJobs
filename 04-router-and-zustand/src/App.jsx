import { Route, Routes } from "react-router";
import { lazy, Suspense} from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import RegisterPage from "./pages/Contacto";
import LoginPage from "./pages/LoginPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const Contacto = lazy(() => import("./pages/Contacto"));
const JobDetail = lazy(() => import("./pages/Detail"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const NotFoundPage = lazy(() => import("./pages/404"));

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
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/regirser" element={<RegisterPage />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/profile" element={
            <ProtectedRoute >
              <ProfilePage />
            </ProtectedRoute> 
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
