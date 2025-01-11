// Import express
const express = require('express');

// Initialize the app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Backend!');
});

// A sample GET endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'Here is your data', data: [1, 2, 3, 4] });
});

// A sample POST endpoint
app.post('/api/create', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: 'User created', user: { name, age } });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
