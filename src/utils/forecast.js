const request = require('postman-request');

const forecast = (long, lat, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=255fbaa3da49c33e8de8f41d931d9915&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '&units=f';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            const current = body.current;
            const message = current.weather_descriptions[0] +
                `. It is currently ${current.temperature} degrees out.  It feels ` +
                `like ${current.feelslike} degrees out.`;
            callback(undefined, message);
        }
    });
}

module.exports = forecast;