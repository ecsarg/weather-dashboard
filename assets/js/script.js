var cityEl = document.getElementsByClassName("currentCity");
var cityImageEl = document.getElementsByClassName("currentImage");
var currentTempEl = document.getElementsByClassName("currentTemp");
var currentWindEl = document.getElementsByClassName("currentWind");
var currentHumidityEl = document.getElementsByClassName("currentHumidity");
var currentUVEl = document.getElementsByClassName("currentUV");
var cityHistory = document.getElementById("history");

var APIKey = "af367ea16009cefef0fccb4e2e9f31ee";

var currentWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey);
    console.log(currentWeather);
};

searchBtn.on("click", currentWeather());