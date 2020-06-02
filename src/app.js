const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Larry'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Larry Kagan'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Test help message'
    });
})

app.get('/Weather', (req, res) => {
    res.send({
        forecast: '',
        location: ''
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});