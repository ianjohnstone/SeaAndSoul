const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allows request from your frontend website
app.use(express.json()); // Parses JSON payloads sent from fetch API
app.use(express.urlencoded({ extended: true })); // Parses standard HTML form POST requests

// Route to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  // Basic validation check
  if (!name || !email) {
    return res.status(400).json({ 
      status: 'error', 
      message: 'Name and email are required fields.' 
    });
  }

  // Log incoming request data to console
  console.log('--- New Consultation Request ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone || 'Not provided'}`);
  console.log(`Service: ${service}`);
  console.log(`Message: ${message}`);

  // Send success response back to the client
  res.status(200).json({
    status: 'success',
    message: 'Thank you! Your request has been received.'
  });
});

// Start listening for incoming connections
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});