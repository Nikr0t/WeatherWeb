document.getElementById('search').addEventListener('click', getWeather);

    function getWeather() {
      const city = document.getElementById('city').value;
      const apiKey = '8118cba675ed455b8ce202003252802'; 
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.error) {
            document.getElementById('error').textContent = data.error.message;
            document.getElementById('weatherInfo').innerHTML = '';
          } else {
            displayWeather(data);
          }
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
        });
    }

    function displayWeather(data) {
      const weatherInfo = document.getElementById('weatherInfo');
      const error = document.getElementById('error');
      error.textContent = ''; 

      weatherInfo.innerHTML = `
        <h2>Weather in ${data.location.name}, ${data.location.country}</h2>
        <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
      `;
    }

    function flipCard() {
      document.getElementById("card").classList.toggle("flipped");
  }
