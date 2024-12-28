
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Kavarna Signal Management Backend is running');
});

app.listen(4000, () => {
  console.log('Backend server is running on http://localhost:4000');
});
