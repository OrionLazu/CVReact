import React, { useState } from 'react';
import './App.css';


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bienvenue sur mon application React</h1>
        <p className="mb-2">Compteur : {count}</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setCount(prev => prev + 1)}
        >
          Incrémenter
        </button>
      </main>
      <Footer />
    </div>
  );
}
