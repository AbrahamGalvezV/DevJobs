import { NavLink } from "react-router";
import { useAuth } from "../Context/AuthContext"; 
import "./Header.css";

export function Header() {
  return (
    <>
      <header>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "white" }}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            DevJobs
          </h1>
        </NavLink>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/search"
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Empleos
          </NavLink>

          <NavLink
            to=""
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Empresas
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => {
              return isActive ? "nav__link active-link" : "nav__link";
            }}
          >
            Register
          </NavLink>
        </nav>

        <HeaderUserButton />

      </header>
    </>
  );
}

const HeaderUserButton = () => {
  const { isLoggedIn, login, logout } = useAuth()

  return isLoggedIn
    ? <button onClick={logout}>Cerrar sesión</button>
    : <button onClick={login}>Iniciar sesión</button>          
}