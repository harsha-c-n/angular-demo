// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Set up a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
