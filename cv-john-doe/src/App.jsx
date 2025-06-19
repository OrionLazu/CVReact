// App.jsx – Point d'entrée principal de l'application React

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // En-tête du site
import Footer from './components/Footer'; // Pied de page commun
import Home from './pages/Home'; // Page d'accueil
import Services from './pages/Services'; // Page des services
import Projects from './pages/Projects'; // Page des projets
import Blog from './pages/Blog'; // Page du blog
import Contact from './pages/Contact'; // Page de contact
import Legal from './pages/Legal'; // Mentions légales

import './styles/global.css'; // Styles globaux
import './styles/custom.css'; // Styles personnalisés

function App() {
  return (
    <Router>
      {/* Header commun à toutes les pages */}
      <Header />

      {/* Contenu principal variant selon l'URL */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>

      {/* Footer commun à toutes les pages */}
      <Footer />
    </Router>
  );
}

export default App;