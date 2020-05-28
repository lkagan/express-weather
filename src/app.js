const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello express!');
});

app.get('/help', (req, res) => {
    res.send('Help page');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/Weather', (req, res) => {
    res.send('Weather');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});