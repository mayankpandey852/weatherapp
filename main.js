
const apiKey="d1498d826983553616152a4ab3e4bae0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon=document.querySelector('.weather-img');

function getData(){

    const city = document.querySelector('.search').children[0].value;
    checkWeather(city);
    

}


async function checkWeather(city){
    
    const response =await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector('#city').innerHTML=data.name;
    document.querySelector('#temp').innerHTML= Math.round(data.main.temp);
    document.querySelector('#humidity').innerHTML=data.main.humidity + " %";
    document.querySelector('#windspeed').innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="/weatherapp/images/weather images/cloudy.png";
    }
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="/weatherapp/images/weather images/sunny.png";
    }
    if(data.weather[0].main=="Rain"){
        weatherIcon.src="/weatherapp/images/weather images/rainy.png";
    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.src="/weatherapp/images/weather images/cloudy.png";
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="/weatherapp/images/weather images/rainy.png";
    }
/* cloudy
rainy
snowing 
sunny */

}
