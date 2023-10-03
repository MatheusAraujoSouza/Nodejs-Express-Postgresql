const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route handler for the home page
router.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/pages/home.html');
});


// Route handler for the home page
router.get('/user', (req, res) => {
  res.sendFile(__dirname + '/views/pages/user.html');
});

// Route handler for the about page
router.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/pages/about.html');
});

// Route handler for the contact page
router.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/pages/contact.html');
});

router.get('/support', (req, res) => {
  res.sendFile(__dirname + '/views/pages/support.html');
});

router.get('/table', (req, res) => {
  res.sendFile(__dirname + '/views/pages/table.html');
});

// CRUD routes
router.get('/api/users', async (req, res) => {
  try {
    const response = await axios.get('http://task-1-api-1:3000/users');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`http://task-1-api-1:3000/users/${id}`);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/api/users', async (req, res) => {
  try {
    const { body } = req;
    const response = await axios.post('http://task-1-api-1:3000/users', body);
    const data = response.data; // Update this line
    res.json(data);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const response = await axios.put(`http://task-1-api-1:3000/users/${id}`, body);
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    await axios.delete(`http://task-1-api-1:3000/users/${id}`);
    res.sendStatus(204); // Send a success status without any data
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
