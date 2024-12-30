
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for cross-origin requests
app.use(cors());

// Serve static files
app.use(express.static('public'));

// Endpoint to get products
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.99, image: 'placeholder.jpg' },
        { id: 2, name: 'Product 2', price: 15.99, image: 'placeholder.jpg' },
        { id: 3, name: 'Product 3', price: 8.99, image: 'placeholder.jpg' }
    ];
    res.json(products);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
