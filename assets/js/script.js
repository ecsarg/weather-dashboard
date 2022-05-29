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



searchBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var searchCity = citySearch.value;
    getCoordinates(searchCity);
    pastCities.push(searchCity);
    localStorage.setItem("search", JSON.stringify(pastCities));
    
    localStorage.getItem(pastCities);
    cityHistory.append(pastCities);
   
   

    $(".city-search").textContent = searchCity + "(" + moment().format("M/D/YYYY") + ")";
    

    
    

    getCoordinates();
});

function getCoordinates() {
    var cityName = $(".city-search").val();

    var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=af367ea16009cefef0fccb4e2e9f31ee";
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
            })
        .then(function(data) {
            let lat = data[0].lat;
            let lon = data[0].lon;
            getWeather(lat, lon);
        })
}

function getWeather (lat, lon) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=af367ea16009cefef0fccb4e2e9f31ee`

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
            })
        .then(function(data) {
            console.log(data);
        currentWeather(data); 
        futureWeather(data);
    })
        
        }
        


function currentWeather(data) {
    $(".city-container").addClass("visible");

    cityEl.textContent = $(".city-search").val() + " (" + moment().format('M/D/YYYY') + ")";
    cityImageEl.src = "https://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png";
    currentTempEl.textContent = "Temp: " + ((data.current.temp - 273.15)*1.8 + 32).toFixed(1) + " \u2109";
    currentWindEl.textContent = "Wind: " + data.current.wind_speed + " MPH";
    currentHumidityEl.textContent = "Humidity: " + data.current.humidity + "%";
    currentUVEl.textContent = "UV Index: " + data.current.uvi;

 }

function futureWeather(data) {
    for (var i = 0; i < 5; i++) {
        console.log(data.daily[i]);

        var card = document.createElement("div");
        card.classList.add("col-xs-4");
        console.log("test");
        
        // var dateEl = document.createElement("h3");
        // dateEl.textContent = moment().format('M/D/YYYY').add[i];
        // card.append(dateEl);

        // var iconEl = document.createElement("img");
        // iconEl.textContent = "https://openweathermap.org/img/wn/" + data.daily.weather[i].icon + "@2x.png";
        // card.append(iconEl);

        var tempEl = document.createElement("p");
        tempEl.textContent = "Temp: " + ((data.daily[i].temp.day - 273.14)*1.8 + 32).toFixed(1) + " \u2109";
        card.append(tempEl);

        var windEl = document.createElement("p");
        windEl.textContent = "Wind: " + data.daily[i].wind_speed; 
        card.append(windEl);

        var humidityEl = document.createElement("p");
        humidityEl.textContent = "Humidity: " + data.daily[i].humidity;
        card.append(humidityEl);

        $(".five-day-forecast").append(card);
      
    }
}