// Projects.jsx – Section portfolio avec trois projets présentés sous forme de cartes

import '../styles/custom.css';
import bannerImage from '../assets/img/banner.jpg';
import project3 from '../assets/img/portfolio/espace-bien-etre.jpg';
import project1 from '../assets/img/portfolio/fresh-food.jpg';
import project2 from '../assets/img/portfolio/restaurant-japonais.jpg';

function Projects() {
  return (
    <>
      {/* Bannière visuelle en haut de page */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          background: `url(${bannerImage}) no-repeat center center/cover`,
          height: '200px'
        }}
      ></section>

      {/* Section principale avec les réalisations */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          {/* Titre de la section */}
          <h2 className="fw-bold text-uppercase text-dark display-4">Portfolio</h2>

          {/* Sous-titre de présentation */}
          <div className="d-flex justify-content-center mb-3">
            <p className="text-muted mb-2 position-relative d-inline-block fs-5">
              Voici quelques-unes de mes réalisations.
            </p>
          </div>

          {/* Ligne décorative sous le sous-titre */}
          <div className="d-flex justify-content-center mb-5">
            <div style={{ width: '230px', height: '3px', backgroundColor: '#0d6efd' }}></div>
          </div>

          {/* Grille contenant 3 projets */}
          <div className="row mt-5">
            {/* Projet 1 : Fresh Food */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <img src={project1} className="card-img-top" alt="Fresh food" style={{ height: '240px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Fresh food</h5>
                  <p className="card-text">Réalisation d’un site avec commande en ligne.</p>
                  <a href="#" className="btn btn-outline-primary">Voir</a>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <div className="border-top pt-2">
                    <small className="text-muted">Site réalisé avec PHP et MySQL</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Projet 2 : Restaurant Akira */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <img src={project2} className="card-img-top" alt="Restaurant Akira" style={{ height: '240px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Restaurant Akira</h5>
                  <p className="card-text">Réalisation d’un site vitrine.</p>
                  <a href="#" className="btn btn-outline-primary">Voir</a>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <div className="border-top pt-2">
                    <small className="text-muted">Site réalisé avec WordPress</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Projet 3 : Espace bien-être */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <img src={project3} className="card-img-top" alt="Espace bien-être" style={{ height: '240px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Espace bien-être</h5>
                  <p className="card-text">Réalisation d’un site vitrine pour un praticien de bien-être.</p>
                  <a href="#" className="btn btn-outline-primary">Voir</a>
                </div>
                <div className="card-footer bg-white border-0 text-center">
                  <div className="border-top pt-2">
                    <small className="text-muted">Site réalisé en HTML/CSS</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects; // Export du composant Portfolio