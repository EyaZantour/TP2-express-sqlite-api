const sqlite3 = require('sqlite3').verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database('./maBaseDeDonnees.sqlite', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connecté à la base de données SQLite.');
    
    // Création ou mise à jour de la table avec la colonne adresse
    db.run(`CREATE TABLE IF NOT EXISTS personnes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      adresse TEXT
    )`, (err) => {
      if (err) {
        console.error(err.message);
      } else {
        // Insertion de données initiales avec des adresses
        const personnes = [
          { nom: 'Bob', adresse: '123 rue Principale' },
          { nom: 'Alice', adresse: '456 avenue des Champs' },
          { nom: 'Charlie', adresse: '789 boulevard de la Liberté' }
        ];
        
        personnes.forEach((personne) => {
          db.run(`INSERT INTO personnes (nom, adresse) VALUES (?, ?)`, [personne.nom, personne.adresse], (err) => {
            if (err) {
              console.error('Erreur d\'insertion :', err.message);
            }
          });
        });
      }
    });
  }
});

module.exports = db;