
function formateDate(timestamp) {
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
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday"
  ];
  let day = days[now.getDay()];
  let placeHolder = document.querySelector("#day");
  placeHolder.innerHTML =  `${day}`

  return `${date}, ${hours}:${minutes}`;
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
  console.log(response.data)
     let temperature = document.querySelector("#temperature");
     let city = document.querySelector("#city");
     let conditions = document.querySelector("#conditions");
     let humidity = document.querySelector("#humidity");
     let wind = document.querySelector("#wind");
     let high = document.querySelector("#high");
     let low = document.querySelector("#low");
     let date = document.querySelector("#day");
    

     fahrenheitTemperature = response.data.main.temp

    temperature.innerHTML = Math.round(fahrenheitTemperature);
    city.innerHTML = response.data.name;
    conditions.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
    high.innerHTML = Math.round(response.data.main.temp_max);
    low.innerHTML = Math.round(response.data.main.temp_min);
    date.innerHTML = formatDate(response.data.dt * 1000);
                   
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
let temperatureElement = document.querySelector("#temperature");
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





