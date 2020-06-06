console.log('Client side JS file loaded');

fetch('/weather?address=boston').then(response => {
    response.json().then(data => {
        if (data.error) {
            return console.error(data.error);
        }

        console.log(`Location: ${data.location} \nWeather: ${data.forecast}`);
    })
})