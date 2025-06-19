// Home.jsx – Page d'accueil avec section "Héros" et "À propos"

import '../styles/custom.css'; // Feuille de style personnalisée
import heroImage from '../assets/img/hero-bg.jpg'; // Image de fond pour la section héros
import profileImg from '../assets/img/john-doe-about.jpg'; // Photo de profil

function Home() {
  return (
    <>
      {/* Section de présentation visuelle pleine page */}
      <section
        className="hero-section position-relative text-white"
        style={{
          background: `url(${heroImage}) no-repeat center center/cover`, // image responsive
          height: '100vh', // hauteur plein écran
        }}
      >
        {/* Superposition éventuelle pour obscurcir ou teinter le fond */}
        <div className="bg-overlay"></div>

        {/* Contenu centré verticalement et horizontalement */}
        <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="display-4 fw-bold">John Doe</h1> {/* Nom principal */}
          <h2 className="lead">Développeur web full-stack</h2> {/* Fonction */}
          <a href="#about" className="btn btn-primary mt-4 text-uppercase">En savoir plus</a> {/* Bouton de scroll vers "à propos" */}
        </div>
      </section>

      {/* Section À propos avec présentation et compétences */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Colonne texte "À propos" */}
            <div className="col-md-6">
              <h2 className="fw-bold mb-4">À propos</h2>
              <p>
                Passionné par l'informatique et les nouvelles technologies, j’ai suivi une formation d’
                <strong>intégrateur-développeur web</strong> au CEF. 
                Au cours de cette formation, j’ai pu acquérir des bases solides pour travailler dans le domaine du 
                <strong> développement web</strong>.
              </p>
              <p>
                Basé à Lyon, je suis en recherche d’une alternance au sein d’une agence digitale pour consolider ma 
                formation de <strong>développeur web full stack</strong>.
              </p>
              <p>
                J’accorde une attention particulière à la qualité du code que j’écris et je respecte les bonnes pratiques du web.
              </p>
            </div>

            {/* Colonne image + compétences */}
            <div className="col-md-6">
              {/* Image de profil centrée */}
              <div className="text-center mb-4">
                <img
                  src={profileImg}
                  alt="John Doe"
                  className="img-fluid rounded shadow"
                  style={{ maxWidth: '300px' }}
                />
              </div>

              {/* Compétences techniques en barres de progression */}
              <h5 className="fw-bold">Mes compétences</h5>

              {/* HTML5 */}
              <div className="mb-2">HTML5 90%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
              </div>

              {/* CSS3 */}
              <div className="mb-2">CSS3 80%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
              </div>

              {/* JavaScript */}
              <div className="mb-2">JavaScript 70%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
              </div>

              {/* PHP */}
              <div className="mb-2">PHP 60%</div>
              <div className="progress mb-3">
                <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
              </div>

              {/* React */}
              <div className="mb-2">React 50%</div>
              <div className="progress">
                <div className="progress-bar bg-primary" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home; // Exportation du composant pour l'utiliser dans les routes