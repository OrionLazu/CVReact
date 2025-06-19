// Footer.jsx – Pied de page du site avec informations, navigation, projets et bouton de retour en haut

import { useEffect } from 'react';
import '../styles/custom.css';

function Footer() {
  // Affiche ou cache le bouton de retour en haut selon la position de scroll
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('backToTop');
      if (!btn) return;
      btn.style.display = window.scrollY > 200 ? 'block' : 'none';
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Colonne 1 – Informations personnelles et réseaux sociaux */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase fw-bold">John Doe</h5>
            <p>123 Rue du Code<br />75000 Paris<br />+33 6 12 34 56 78</p>
            <div>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white me-3">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 – Liens de navigation principaux */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Navigation</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Accueil</a></li>
              <li><a href="/about" className="text-white">À propos</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
              <li><a href="/legal" className="text-white">Mentions légales</a></li>
            </ul>
          </div>

          {/* Colonne 3 – Réalisations ou projets personnels */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Réalisations</h6>
            <ul className="list-unstyled">
              <li><a href="/projects" className="text-white">Portfolio personnel</a></li>
              <li><a href="/projects" className="text-white">Application météo</a></li>
              <li><a href="/projects" className="text-white">Blog technique</a></li>
            </ul>
          </div>

          {/* Colonne 4 – Articles récents */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Articles récents</h6>
            <ul className="list-unstyled">
              <li><a href="/blog" className="text-white">React Hooks</a></li>
              <li><a href="/blog" className="text-white">Flexbox vs Grid</a></li>
              <li><a href="/blog" className="text-white">Accessibilité</a></li>
            </ul>
          </div>
        </div>

        {/* Droits d'auteur */}
        <div className="text-center mt-4">
          <small>© 2025 John Doe – Tous droits réservés</small>
        </div>

        {/* Bouton retour en haut */}
        <a href="#" id="backToTop" className="btn btn-primary position-fixed end-0 bottom-0 m-4" style={{ display: 'none' }}>
          ↑ Haut de page
        </a>
      </div>
    </footer>
  );
}

export default Footer;