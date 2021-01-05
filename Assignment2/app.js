const express=require ("express");
const https=require("https");

const app= express();

app.get("/", function(req,res){

let animatedBackground;

//Using API to get the data//
  const url="https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=31764f86b43b1fb19088c125f971004c&units=metric"

  function bg() {
    if (weather[0].main="Clouds"){
      animatedBackground="clouds.gif"
    }
  }
  //Making a https get request, hence fetching it//
  https.get(url, function(response){
    console.log(response);

    //specifying what we want, use Postman to help you get what u want, or use
    //JSON Viewer to help you navigate the JSON file
    response.on("data", function(data){
      const weatherData=JSON.parse(data)
      const temp=weatherData.main.temp
      const weatherDescription= weatherData.weather[0].description
      const icon=weatherData.weather[0].icon
      const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png"

      //Sending it back to the HTML file to send an output to the users
      res.write("<body background src=animatedBackground" + animatedBackground + ">")
      res.write("<p>The weather is currently "+ weatherDescription +"</p>");
      res.write("<h1>The temperature in Singapore is " +temp +" degrees Celsius.<h1>")
      res.write("<img src=" + imageURL+">")
      res.send()
    })
  })
})

app.listen(3000,function(){
  console.log("Server is running on port 3000")
})
