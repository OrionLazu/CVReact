// Services.jsx – Section des services proposés sur le site

import '../styles/custom.css';
import bannerImage from '../assets/img/banner.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <>
      {/* Bannière de titre avec image de fond */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          background: `url(${bannerImage}) no-repeat center center/cover`,
          height: '200px'
        }}
      ></section>

      {/* Contenu principal de la section Services */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold text-uppercase text-dark display-5 mb-2">Services</h2>
          <p className="text-muted mb-4">Voici les services que je propose en tant que développeur web.</p>

          {/* Ligne de séparation bleue */}
          <div className="d-flex justify-content-center mb-5">
            <div style={{ width: '200px', height: '3px', backgroundColor: '#0d6efd' }}></div>
          </div>

          {/* Cartes de services */}
          <div className="row">
            {/* Service 1 : Intégration web */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <FontAwesomeIcon icon={faCode} className="mb-3" size="3x" style={{ color: '#0d6efd' }} />
                  <h5 className="card-title fw-bold">Intégration web</h5>
                  <p className="card-text">Création d’interfaces web modernes et responsives en HTML, CSS et JavaScript.</p>
                </div>
              </div>
            </div>

            {/* Service 2 : Développement mobile */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <FontAwesomeIcon icon={faMobileAlt} className="mb-3" size="3x" style={{ color: '#0d6efd' }} />
                  <h5 className="card-title fw-bold">Développement mobile</h5>
                  <p className="card-text">Applications mobiles optimisées pour tous les supports grâce à des technologies modernes.</p>
                </div>
              </div>
            </div>

            {/* Service 3 : Référencement SEO */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <FontAwesomeIcon icon={faSearch} className="mb-3" size="3x" style={{ color: '#0d6efd' }} />
                  <h5 className="card-title fw-bold">Référencement SEO</h5>
                  <p className="card-text">Optimisation du contenu pour améliorer la visibilité sur les moteurs de recherche.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;