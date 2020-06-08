console.log("Client side JS file loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = search.value;

    if (! location) {
        return console.error('Location is required');
    }

    console.log(location);

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return console.error(data.error);
            }

            console.log(
                `Location: ${data.location} \nWeather: ${data.forecast}`
            );
        });
    });
});
