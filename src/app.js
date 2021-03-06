const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

// Define paths.
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const name = "Larry Kagan";

// Setup Handlebars engine and views location.
app.set("views", viewsPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// Set static directory
app.use(express.static(path.join(__dirname, "../public")));

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather",
        name,
    });
});

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name,
    });
});

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        message: "Test help message",
        name,
    });
});

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Address is required",
        });
    }

    geocode(req.query.address, (err, {longitude, latitude, location} = {}) => {
        if (err) {
            return res.send({
                error: err,
            });
        }

        forecast(longitude, latitude, (err, weather) => {
            if (err) {
                return res.send({
                    error: err,
                });
            }

            res.send({
                forecast: weather,
                location,
                address: req.query.address,
            });
        });
    });
});

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term",
        });
    }

    console.log(req.query);
    res.send({
        products: [],
    });
});

app.get("/help/*", (req, res) => {
    res.render("404", {
        title: "Page not found",
        message: "Help article not found",
        name,
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        title: "Page not found",
        message: "Page not found",
        name,
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
