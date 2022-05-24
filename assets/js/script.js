var pastCities= [];

var citySearch = document.querySelector(".city-search");
var cityEl = document.querySelector(".currentCity");
var cityImageEl = document.querySelector(".currentImage");
var currentTempEl = document.querySelector(".currentTemp");
var currentWindEl = document.querySelector(".currentWind");
var currentHumidityEl = document.querySelector(".currentHumidity");
var currentUVEl = document.querySelector(".currentUV");
var cityHistory = document.querySelector(".pastCities");
var searchBtn = document.querySelector(".searchBtn");

function saveCity() {

    localStorage.setItem("cities", cityHistory);
};


// var APIKey = "af367ea16009cefef0fccb4e2e9f31ee";

// function currentcity(cityName) {
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;


searchBtn.addEventListener("click", saveCity);


