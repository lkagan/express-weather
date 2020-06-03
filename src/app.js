const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Define paths.
const viewsPath    = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const name         = 'Larry Kagan';

// Setup Handlebars engine and views location.
app.set('views', viewsPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);

// Set static directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        message: 'Test help message',
        name
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