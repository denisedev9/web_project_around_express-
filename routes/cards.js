const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// Construimos la ruta absoluta al archivo cards.json
const cardsPath = path.join(__dirname, '../data/cards.json');

// Ruta: GET /cards
router.get('/', (req, res) => {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Error interno del servidor al leer los datos' });
    }
    return res.send(JSON.parse(data));
  });
});

module.exports = router;
