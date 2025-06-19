// Legal.jsx – Page des mentions légales avec accordéon Bootstrap

import { useEffect } from 'react';

function Legal() {
  useEffect(() => {
    // Ajoute une balise meta pour empêcher l'indexation par les moteurs de recherche
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex';
    document.head.appendChild(meta);

    // Nettoyage lors du démontage du composant
    return () => document.head.removeChild(meta);
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Titre principal */}
        <h2 className="text-center text-uppercase fw-bold mb-4" style={{ fontSize: '2.5rem', color: 'black'}}>
          MENTIONS LÉGALES
        </h2>

        {/* Ligne bleue décorative */}
        <div className="d-flex justify-content-center mb-4">
          <div style={{ width: '240px', height: '4px', backgroundColor: '#0d6efd' }}></div>
        </div>

        {/* Accordéon contenant les différentes sections légales */}
        <div className="accordion" id="legalAccordion">

          {/* Bloc 1 : Éditeur du site */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                Éditeur du site
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <p className="mb-1 fw-bold">John Doe</p>
                <p className="mb-1">
                  <i className="fas fa-map-marker-alt me-2"></i>40 Rue Laure Diebold<br />69009 Lyon, France
                </p>
                <p className="mb-1">
                  <i className="fas fa-phone-alt me-2"></i>06 20 30 40 50
                </p>
                <p className="mb-1">
                  <i className="fas fa-envelope me-2"></i>
                  <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bloc 2 : Hébergeur */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                Hébergeur
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <h5 className="fw-bold">Always Data</h5>
                <p className="mb-1">91 rue du Faubourg Saint Honoré<br />75008 Paris</p>
                <p className="mb-0">
                  <i className="fas fa-globe me-2"></i>
                  <a href="https://www.alwaysdata.com" target="_blank" rel="noreferrer">www.alwaysdata.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bloc 3 : Crédits */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                Crédits
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
              <div className="accordion-body">
                <h5 className="fw-bold">Crédits</h5>
                <p className="mb-1">Site développé par John Doe, étudiant du CEF.</p>
                <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noreferrer">Pixabay</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Legal; // Export du composant pour usage dans les routes