//Variables to select city
var selectedCity;

function sendAJAXRequest(city){ 
  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://community-open-weather-map.p.rapidapi.com/weather?q="+city+"%2Cuk&lat=0&lon=0&id=2172797&lang=null&units=metric&mode=xml%2C%20html",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "0ad06be71emsh617afce1e5f9491p17ef33jsnb143a94afb36",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  };

  
  //Main Weather
  $.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    console.log(response);
    var result= response.weather[0].main;
    console.log(result);
    $("#result-display").html(result);
  });

  //Description of Weather
  $.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    console.log(response);
    var result= response.weather[0].description;
    console.log(result);
    $("#description").html(result);
  });


  //Temperature
  $.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    console.log(response);
    var result= response.main.temp;
    console.log(result);
    $("#temperature").html(result);
  });

  //Feels Like
  $.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    console.log(response);
    var result= response.main.feels_like;
    console.log(result);
    $("#feels-like").html(result);
  });

  //Lat
  $.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    console.log(response);
    var latitude= response.coord.lat;
    console.log(latitude);
  });

  $.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    console.log(response);
    var longitude= response.coord.lon;
    console.log(longitude);
  });
}

function initMap() {
  //always have starting lat lng to work with
let sgLocation = { lat: 1.3521, lng: 103.8198 };

map = new google.maps.Map(document.getElementById("map"), {
  center: sgLocation,
  zoom: 10,
});


$(document).ready(function () {
  $("body").on("click","#submit",function(){
    selectedCity=$("#city-menu").val();
    sendAJAXRequest(selectedCity);
    initMap();
  })
})
 

  /*$.ajax({
    method: "GET",
    url: "api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey //+ "&units=" + unit,
  })

    .done(function (data) {
      var weatherData = JSON.parse(data);
      var temp = weatherData.main.temp;
      var weatherDescription = weatherData.weather[0].description;
      var icon = weatherData.weather[0].icon;
      var imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      console.log(response);

      //Sending it back to the HTML file to send an output to the users
      console.log("<body background src=animatedBackground" + animatedBackground + ">");
      console.log("<p>The weather is currently " + weatherDescription + "</p>");
      console.log("<h1>The temperature in Singapore is " + temp + " degrees Celsius.<h1>");
      console.log("<img src=" + imageURL + ">")
    })*/}