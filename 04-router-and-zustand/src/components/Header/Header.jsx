import {Link} from '../Link'
import "./Header.css"


export function Header() {



  return (
    <>
      <header>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{color: 'white' }}>
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
        </Link>
        <nav>
          <Link 
          to="/"
          className={({ isActive }) => {
            return isActive ? "nav__link active-link" : "nav__link"
          }}>Inicio</Link>

          <Link 
          to="/search"
          className={({ isActive }) => {
            return isActive ? "nav__link active-link" : "nav__link"
          }}>Empleos</Link>

          <Link 
          to=""
          className={({ isActive }) => {
            return isActive ? "nav__link active-link" : "nav__link"
          }}>Empresas

          </Link>
          <Link 
          to="/contacto"
          className={({ isActive }) => {
            return isActive ? "nav__link active-link" : "nav__link"
          }}>Register</Link>

        </nav>
        {/* <div>
          <devjobs-avatar></devjobs-avatar>
        </div> */}
      </header>
    </>
  );
}
