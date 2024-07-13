const express = require('express');
const port = 2000; 
const routes = require('./routes');
const cors = require('cors');

const mongoose = require('mongoose');
require('dotenv').config(); 
let app = express();
app.use(cors()); 
app.use(express.json());
mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log("Connectés a la BDD");
    })
    .catch((err) => {
        console.log('Erreur de connexion', err)
    })

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server en ligne sur le port ${port}`);
});