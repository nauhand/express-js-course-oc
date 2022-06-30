const express = require('express');
const mongoose = require('mongoose');
const stuffRoutes = require('./routes/stuff');

var cors = require('cors')
const app = express();

mongoose.connect('mongodb+srv://nauhand:parental0011@cluster0.47erv.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use(cors());

app.use('/api/stuff', stuffRoutes);

module.exports = app;