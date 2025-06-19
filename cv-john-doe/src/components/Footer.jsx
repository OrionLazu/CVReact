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
    <>
      {/* Section colonnes avec fond gris clair et texte foncé */}
      <section style={{ backgroundColor: '#EEEEEE' }} className="text-dark pt-5 pb-4">
        <div className="container">
          <div className="row text-center text-md-start">

            {/* Colonne 1 – Informations personnelles et réseaux sociaux */}
            <div className="col-md-3 mb-4">
              <h5 className="text-uppercase fw-bold">John Doe</h5>
              <p>123 Rue du Code<br />75000 Paris<br />+33 6 12 34 56 78</p>
              <div>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-dark me-3 hover-underline">
                  <i className="fab fa-github me-1"></i> GitHub
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-dark me-3 hover-underline">
                  <i className="fab fa-twitter me-1"></i> Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary hover-underline">
                  <i className="fab fa-linkedin me-1"></i> LinkedIn
                </a>
              </div>
            </div>

            {/* Colonne 2 – Liens utiles */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Liens utiles</h6>
              <ul className="list-unstyled footer-list">
                <li><a href="/" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Accueil</a></li>
                <li><a href="/about" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>À propos</a></li>
                <li><a href="/services" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Services</a></li>
                <li><a href="/contact" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Me contacter</a></li>
                <li><a href="/legal" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Mentions légales</a></li>
              </ul>
            </div>

            {/* Colonne 3 – Mes dernières réalisations */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Mes dernières réalisations</h6>
              <ul className="list-unstyled footer-list">
                <li><a href="/projects" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Fresh food</a></li>
                <li><a href="/projects" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Restaurant Akira</a></li>
                <li><a href="/projects" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Espace bien-être</a></li>
              </ul>
            </div>

            {/* Colonne 4 – Mes derniers articles */}
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Mes derniers articles</h6>
              <ul className="list-unstyled footer-list">
                <li><a href="/blog" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Coder son site en HTML/CSS</a></li>
                <li><a href="/blog" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Vendre ses produits sur le web</a></li>
                <li><a href="/blog" className="text-dark hover-underline"><i className="fas fa-chevron-right me-1 text-primary"></i>Se positionner sur Google</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Section copyright avec fond identique au header */}
      <section className="bg-dark text-white text-center py-3">
        <small>© {new Date().getFullYear()} John Doe – Tous droits réservés</small>
      </section>

      {/* Bouton retour en haut */}
      <a
        href="#"
        id="backToTop"
        className="btn btn-primary position-fixed end-0 bottom-0 m-4"
        style={{ display: 'none' }}
        aria-label="Retour en haut"
      >
        ↑ Haut de page
      </a>
    </>
  );
}

export default Footer;