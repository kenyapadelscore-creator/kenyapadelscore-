const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve admin files from root (admin folder content accessible at /)
app.use('/', express.static(path.join(__dirname, 'admin')));


// Specific routes for other sections
app.get('/referee', (req, res) => {
  res.sendFile(path.join(__dirname, 'referee', 'login_referee.html'));
});

app.get('/live', (req, res) => {
  res.sendFile(path.join(__dirname, 'live', 'tournaments.html'));
});

// Serve static files for live and referee sections
app.use('/referee', express.static(path.join(__dirname, 'referee')));
app.use('/live', express.static(path.join(__dirname, 'live')));

// 404 handler - must be last
app.use((req, res) => {
  res.status(404).json({ error: 'Page not found' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Frontend server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the application`);
});