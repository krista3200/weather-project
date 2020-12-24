
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours <10) {
    hours=`0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes =`0${minutes}`;    
  }
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
  return `${day} ${hours}:${minutes}`
 
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

function searchCity(city) {
  let apiKey = "c58db3d14698a9e64d16eeb8866f42af";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeather);
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
    let locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(locationUrl).then(displayWeather);
    }

  
  function showPostion(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentLocation);
  }
  
  let currentLoc = document.querySelector("#current-location");
  currentLoc.addEventListener("click", showPostion);

function convertToFahrenheit(event){
event.preventDefault();
let fahrenheitTemperature = (32°F − 32) * 5/9;
let temperatureElement = document.querySelector("#temperature");
temperautreElement.innerHTML = fahrenheitTemperature;
;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  
  }

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);


search("Kansas City");


