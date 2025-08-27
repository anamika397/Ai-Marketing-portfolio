// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Import API route
const generateProposal = require('./api/generateProposal');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static frontend from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.post('/api/generateProposal', generateProposal);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
