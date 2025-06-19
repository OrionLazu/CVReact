// Blog.jsx – Page de blog avec une liste d’articles et une mise en page fidèle à la maquette

import '../styles/custom.css'; // Styles personnalisés
import bannerImage from '../assets/img/banner.jpg'; // Image pour la bannière du haut de page
import blog1 from '../assets/img/blog/coder.jpg';
import blog2 from '../assets/img/blog/croissance.jpg';
import blog3 from '../assets/img/blog/google.jpg';
import blog4 from '../assets/img/blog/screens.jpg';
import blog5 from '../assets/img/blog/seo.jpg';
import blog6 from '../assets/img/blog/technos.png';

function Blog() {
  // Données des articles à afficher dans les cartes
  const articles = [
    { title: 'Coder son site en HTML/CSS', date: '22 août 2022', image: blog1 },
    { title: 'Vendre ses produits sur le web', date: '20 août 2022', image: blog2 },
    { title: 'Se positionner sur Google', date: '12 août 2022', image: blog3 },
    { title: 'Coder en responsive design', date: '31 juillet 2022', image: blog4 },
    { title: 'Techniques de référencement', date: '30 juillet 2022', image: blog5 },
    { title: 'Apprendre à coder', date: '12 juillet 2022', image: blog6 },
  ];

  return (
    <>
      {/* Bannière avec image en fond */}
      <section
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          background: `url(${bannerImage}) no-repeat center center/cover`,
          height: '200px'
        }}
      ></section>

      {/* Section principale du blog */}
      <section className="pt-4 pb-5 bg-white">
        <div className="container text-center">

          {/* Titre du blog */}
          <h2 className="fw-bold text-uppercase text-dark display-5 mb-2">BLOG</h2>

          {/* Sous-titre de présentation */}
          <p className="text-muted mb-4">Retrouvez ici quelques articles sur le développement web.</p>

          {/* Ligne bleue décorative */}
          <div className="d-flex justify-content-center mb-5">
            <div style={{ width: '240px', height: '3px', backgroundColor: '#0d6efd' }}></div>
          </div>

          {/* Affichage des articles en grille */}
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">

                  {/* Image de l’article */}
                  <img
                    src={article.image}
                    className="card-img-top"
                    alt={article.title}
                    style={{ height: '200px', objectFit: 'cover', objectPosition: 'top' }}
                  />

                  {/* Contenu principal de l’article */}
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title fw-bold">{article.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>

                    {/* Bouton "Lire la suite" */}
                    <a href="#" className="btn btn-sm btn-outline-primary align-self-start mt-2">
                      Lire la suite
                    </a>
                  </div>

                  {/* Pied de carte avec la date de publication */}
                  <div className="card-footer bg-white border-0 text-start">
                    <small className="text-muted">Publié le {article.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog; // Exportation du composant