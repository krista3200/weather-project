
function formatDate(timestamp) {
  let date = new Date(timestamp);

  let days = [
    "Sun", 
    "Mon", 
    "Tue", 
    "Wed", 
    "Thur", 
    "Fri", 
    "Sat"
  ];

  let day = days[date.getDay()];
  return `${day} ${formatHours(timestamp)}`;
 
 }


function citySearch(event) {
event.preventDefault();
let search = document.querySelector("#search");
let div = document.querySelector("#city");
div.innerHTML = `${search.value}`
searchCity(search.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearch);

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours <10) {
    hours=`0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes =`0${minutes}`;  
  }
  return `${hours}:${minutes}`;
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.list[0];
  forecastElement.innerHTML = 
  `  
  <div class="col mb-7">
  <div class="card h-65"> 
  <div class="card-body">
  <p class="card-text">
  <h3>${formatHours(forecast.dt * 1000)}</h3>
  <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="card-img-top" alt="...">
  <div class="weather-forecast-temperature"> ${Math.round(forecast.main.temp_max)}°/
  ${Math.round(forecast.main.temp_min)}°
    </div>
  </p>
  
  </div>
</div>
</div>
`;
 
forecast = response.data.list[1];
forecastElement.innerHTML += 
`  
<div class="col mb-7">
<div class="card h-65"> 
<div class="card-body">
<p class="card-text">
<h3>${formatHours(forecast.dt * 1000)}</h3>
<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="card-img-top" alt="...">
<div class="weather-forecast-temperature"> ${Math.round(forecast.main.temp_max)}°/
${Math.round(forecast.main.temp_min)}°
  </div>
</p>

</div>
</div>
</div>
`;
forecast = response.data.list[2];
forecastElement.innerHTML += 
`  
<div class="col mb-7">
<div class="card h-65"> 
<div class="card-body">
<p class="card-text">
<h3>${formatHours(forecast.dt * 1000)}</h3>
<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="card-img-top" alt="...">
<div class="weather-forecast-temperature"> ${Math.round(forecast.main.temp_max)}°/${Math.round(forecast.main.temp_min)}°
  </div>
</p>

</div>
</div>
</div>
`;
forecast = response.data.list[3];
forecastElement.innerHTML += 
`  
<div class="col mb-7">
<div class="card h-65"> 
<div class="card-body">
<p class="card-text">
<h3>${formatHours(forecast.dt * 1000)}</h3>
<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="card-img-top" alt="...">
<div class="weather-forecast-temperature"> ${Math.round(forecast.main.temp_max)}°/${Math.round(forecast.main.temp_min)}°
  </div>
</p>

</div>
</div>
</div>
`;
forecast = response.data.list[4];
forecastElement.innerHTML += 
`  
<div class="col mb-7">
<div class="card h-65"> 
<div class="card-body">
<p class="card-text">
<h3>${formatHours(forecast.dt * 1000)}</h3>
<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="card-img-top" alt="...">
<div class="weather-forecast-temperature"> ${Math.round(forecast.main.temp_max)}°/${Math.round(forecast.main.temp_min)}°
  </div>
</p>

</div>
</div>
</div>
`;
forecast = response.data.list[5];
forecastElement.innerHTML += 
`  
<div class="col mb-7">
<div class="card h-65"> 
<div class="card-body">
<p class="card-text">
<h3>${formatHours(forecast.dt * 1000)}</h3>
<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="card-img-top" alt="...">
<div class="weather-forecast-temperature"> ${Math.round(forecast.main.temp_max)}°/
${Math.round(forecast.main.temp_min)}°
  </div>
</p>

</div>
</div>
</div>
`;
forecast = response.data.list[6];
forecastElement.innerHTML += 
`  
<div class="col mb-7">
<div class="card h-65"> 
<div class="card-body">
<p class="card-text">
<h3>${formatHours(forecast.dt * 1000)}</h3>
<img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" class="card-img-top" alt="...">
<div class="weather-forecast-temperature"> ${Math.round(forecast.main.temp_max)}°/
${Math.round(forecast.main.temp_min)}°
  </div>
</p>

</div>
</div>
</div>
`;

}

function searchCity(city) {
  let apiKey = "c58db3d14698a9e64d16eeb8866f42af";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayWeather(response) {
     let temperatureElement = document.querySelector("#temperature");
     let cityElement = document.querySelector("#city");
     let conditionsElement = document.querySelector("#conditions");
     let humidityElement = document.querySelector("#humidity");
     let windElement = document.querySelector("#wind");
     let dateElement = document.querySelector("#date");  
     let iconElement = document.querySelector("#icon");
       

     fahrenheitTemperature = response.data.main.temp
     celsiusTemperature = response.data.main.temp

    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    cityElement.innerHTML = response.data.name;
    conditionsElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML=formatDate(response.data.dt * 1000);
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
  
                   
  }

  function showCurrentLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "c58db3d14698a9e64d16eeb8866f42af";
    let locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(locationUrl).then(displayWeather);
    }

  
  function showPostion(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
  }
  
  let currentLoc = document.querySelector("#current-location");
  currentLoc.addEventListener("click", showPostion);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature"); 
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

let celsiusTemperature = null;


searchCity("Kansas City");


