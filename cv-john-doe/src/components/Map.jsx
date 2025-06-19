function Map() {
  return (
    <div className="mt-3">
        {/* Intégration d'une carte Google Maps avec l'adresse donnée */}
      <iframe
        title="map"
        src="https://www.google.com/maps?q=40+Rue+Laure+Diebold,+69009+Lyon,+France&output=embed"
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;