document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            const temperature = data.main.temp;
            document.getElementById('weatherResult').innerText = `Current temperature in ${city}: ${temperature}°C`;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerText = error.message;
        });
});