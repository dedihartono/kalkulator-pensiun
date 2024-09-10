const express = require('express');
const path = require('path');
const app = express();

const PORT = 5000;

// Middleware to set Cache-Control headers for static files
app.use(express.static(path.join(__dirname, '../public'), {
    maxAge: '1y' // Cache for 1 year
}));

app.get('/locales/:lang', (req, res) => {
    const lang = req.params.lang;
    res.sendFile(path.join(__dirname, 'locales', `${lang}.json`));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
