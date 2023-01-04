require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectMongo } = require('./src/database/mongo');
const { find, create } = require('./src/shortener.controller');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectMongo();

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl', create);

app.get('/api/shorturl/:url', find);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
