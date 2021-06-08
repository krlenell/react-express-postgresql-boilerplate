require('dotenv/config');
const path = require('path');
const express = require('express');

const db = require('./database');

const app = express();

const distPath = path.join(__dirname, 'dist/');
const staticMiddleware = express.static(distPath);

app.use(staticMiddleware);

app.use(express.json());

// Feel free to delete these tests once you've gotten things working
app.get('/api/test', (req, res) => {
  res.status(200).json({ success: 'Server test successful' });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
