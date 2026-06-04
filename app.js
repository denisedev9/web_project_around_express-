const express = require('express');
// Importamos los enrutadores que acabamos de crear
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();
const PORT = 3000;

// Conectamos las rutas del módulo de usuarios
app.use('/users', usersRouter);

// Conectamos las rutas del módulo de tarjetas
app.use('/cards', cardsRouter);

// Ruta comodín para cualquier otra dirección que no exista
app.use((req, res) => {
  res.status(404).send({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
