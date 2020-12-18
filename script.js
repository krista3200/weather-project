let now = new Date()
let date = now.getDate(); //returns todays date
let hours = now.getHours();
let minutes = now.getMinutes();

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

let months = [
  "Jan", 
  "Feb", 
  "Mar", 
  "Apr", 
  "May", 
  "June", 
  "July", 
  "Aug", 
  "Sept", 
  "Oct", 
  "Nov", 
  "Dec"
  ]
let month = months[now.getMonth()];

  let placeHolder = document.querySelector("#day");
placeHolder.innerHTML =  `${day}`

 let h1 = document.querySelector("#date-time");
h1.innerHTML =  `${month} ${date}, ${hours}:${minutes}`


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
     let temperature = document.querySelector("#temperature");
     let city = document.querySelectory("#city");
     let conditions = document.querySelector("#conditions");
     let humidity = document.querySelector("#humidity");
     let wind = document.querySelector("#wind");

     fahrenheitTemperature = response.data.main.temp

    temperature.innerHTML = Math.round(fahrenheitTemperature);
    city.innerHTML = response.data.name;
    conditions.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
   
               
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
temperatureElement.innerHTML = 30;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event){
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
   temperatureElement.innerHTML = -1; 
  }

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

search("Kansas City");




