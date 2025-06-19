// Contact.jsx – Page de contact avec formulaire et coordonnées

import Map from '../components/Map'; // Composant séparé pour l'affichage de la carte
import contactBg from '../assets/img/contact-bg.jpg'; // Image de fond pour la bannière

function Contact() {
  return (
    // Section avec image de fond qui entoure tout le contenu
    <div
      style={{
        background: `url(${contactBg}) center center / cover no-repeat`,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 0'
      }}
    >
      {/* Boîte centrale avec fond blanc et ombre */}
      <div className="container bg-white shadow rounded p-5" style={{ maxWidth: '1320px', backgroundColor: 'rgba(255,255,255,0.95)' }}>
        
        {/* Titre principal */}
        <h2 className="text-center fw-bold text-uppercase text-dark mb-2">Me contacter</h2>
        
        {/* Texte de présentation */}
        <p className="text-center text-muted mb-4">
          Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
        </p>
        
        {/* Ligne décorative sous le texte */}
        <div className="d-flex justify-content-center mb-4">
          <div style={{ width: '240px', height: '3px', backgroundColor: '#0d6efd' }}></div>
        </div>

        <div className="row">
          {/* Formulaire de contact */}
          <div className="col-md-6 border-end">
            <h5 className="fw-bold mb-3">Formulaire de contact</h5>
            <form>
              <input type="text" className="form-control mb-3" placeholder="Votre nom" />
              <input type="email" className="form-control mb-3" placeholder="Votre adresse email" />
              <input type="tel" className="form-control mb-3" placeholder="Votre numéro de téléphone" />
              <input type="text" className="form-control mb-3" placeholder="Sujet" />
              <textarea className="form-control mb-3" rows="4" placeholder="Votre message"></textarea>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>

          {/* Coordonnées et carte */}
          <div className="col-md-6">
            <h5 className="fw-bold mb-3">Mes coordonnées</h5>
            <p className="mb-1">40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p className="mb-3">06 20 30 40 50</p>
            <Map /> {/* Carte Google Maps intégrée */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; // Export du composant pour utilisation dans les routes