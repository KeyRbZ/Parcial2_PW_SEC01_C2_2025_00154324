// server.js
const express = require('express');
const app = express();
const PORT = 3130;

// Middleware 
app.use(express.json());

// Rutas
app.use('/cuentas', require('./routes/cuentas'));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});