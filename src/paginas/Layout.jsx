import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="beneficios">Beneficios</Link>
            </li>

            <li>
              <Link to="productos">Productos</Link>
            </li>
            <li>
              <Link to="contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
    </>
  );
}

export default Layout;
