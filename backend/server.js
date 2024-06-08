const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('../backend/db');
const purchaseRoutes = require('../backend/routes/purchase');
const errorHandler = require('../backend/middleware/errorHandler');

const app = express();
const port = 3001;

app.use(bodyParser.json());


connectDB();


app.use('/api', purchaseRoutes);


app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
