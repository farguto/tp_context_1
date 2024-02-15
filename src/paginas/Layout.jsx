import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useMenu } from "./MenuContext";
import "../App.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <header>
      <nav className="menu-nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="sobrenosotros"> Sobre nosotros </Link>
          </li>
          <li>
            <Link to="productos">Productos</Link>
          </li>
          <li>
            <Link to="contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <button className="toggle-menu-btn" onClick={toggleMenu}>
        {" "}
        <FaBars size={20} />
      </button>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <nav>
            <ul>
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="sobrenosotros"> Sobre nosotros </Link>
              </li>
              <li>
                <Link to="productos">Productos</Link>
              </li>
              <li>
                <Link to="contacto">Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
