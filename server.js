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

// Ruta para la raíz
app.get('/', (req, res) => {
  res.json({ 
    message: "API de Cuentas Bancarias - Examen II",
    endpoints: {
      todas_cuentas: "/cuentas",
      cuenta_por_id: "/cuentas/:id",
      busqueda: "/cuentas/search?queryParam=valor",
      balance_total: "/cuentas/balance/total"
    }
  });
});