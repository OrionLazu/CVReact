// Header.jsx – Barre de navigation principale du site

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/custom.css';

function Header() {
  const location = useLocation(); // Permet de connaître la page actuelle
  const [navOpen, setNavOpen] = useState(false); // Gère l'ouverture/fermeture du menu mobile

  useEffect(() => {
    setNavOpen(false); // Ferme le menu lorsque l'on change de page
  }, [location]);

  // Détermine si un lien est actif (page courante)
  const isActive = (path) => location.pathname === path ? 'active' : '';

  // Gère le bouton de menu responsive
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className="bg-dark shadow-sm fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        {/* Logo ou nom du site */}
        <Link className="navbar-brand text-uppercase fw-bold text-white" to="/">
          John Doe
        </Link>

        {/* Bouton de menu pour mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Liens de navigation */}
        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive('/')}`} to="/">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive('/services')}`} to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive('/projects')}`} to="/projects">Réalisations</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive('/blog')}`} to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-white ${isActive('/contact')}`} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header; // Export du composant Header