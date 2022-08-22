const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./db');

app.use(cors());
app.use(express.json());

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.use('/api', require('./routes/user_info'));
app.use('/api/upload', require('./routes/upload'));

app.listen(process.env.PORT || 5000, () => {
  console.log('Connected to the server');
});
