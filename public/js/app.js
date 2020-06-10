console.log("Client side JS file loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message1 = document.querySelector("#message1");
const message2 = document.querySelector("#message2");

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const location = search.value;

    message1.textContent = 'loading...';
    message2.textContent = '';

    if (! location) {
        return message1.textContent = 'Location is required';
    }

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                return message1.textContent = data.error;
            }

            message1.textContent = `Location: ${data.location}`;
            message2.textContent = `Weather: ${data.forecast}`;
        });
    });
});
