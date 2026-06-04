const router = require('express').Router();
const fs = require('fs');
const path = require('path');

// Construimos la ruta absoluta al archivo users.json usando path.join
const usersPath = path.join(__dirname, '../data/users.json');

// Ruta: GET /users
router.get('/', (req, res) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Error interno del servidor al leer los datos' });
    }
    // Parseamos el texto a JSON real y lo mandamos
    return res.send(JSON.parse(data));
  });
});

// Ruta: GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ message: 'Error interno del servidor al leer los datos' });
    }

    const usersData = JSON.parse(data);
    const user = usersData.find((u) => u._id === id);

    if (!user) {
      return res.status(404).send({ message: 'ID de usuario no encontrado' });
    }

    return res.send(user);
  });
});

module.exports = router;
