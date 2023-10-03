// index.js

const express = require('express');
const app = express();
const router = require('./app/router');

// Other necessary configurations and middleware
app.use(express.json());
app.use(router);


// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});