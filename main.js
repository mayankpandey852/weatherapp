
const apiKey="d1498d826983553616152a4ab3e4bae0";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon=document.querySelector('.weather-img');
let weatherCard=document.querySelector('.weather');


function getData(){

    const city = document.querySelector('.search').children[0].value;
    checkWeather(city);
    weatherCard.classList.toggle('active');
    

}


async function checkWeather(city){
    
    const response =await fetch(apiUrl + city +`&appid=${apiKey}`);
    
    if(response.status==404){
        document.querySelector('.error').style.display="block";
        document.querySelector('.weather').style.display="none";
    }
    else{
       
        var data=await response.json();
        console.log(data);
        document.querySelector('#city').innerHTML=data.name;
        document.querySelector('#temp').innerHTML= Math.round(data.main.temp);
        document.querySelector('#humidity').innerHTML=data.main.humidity + " %";
        document.querySelector('#windspeed').innerHTML=data.wind.speed + " km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/weather images/cloudy.png";
        }
        if(data.weather[0].main=="Clear"){
            weatherIcon.src="/images/weather images/sunny.png";
        }
        if(data.weather[0].main=="Rain"){
            weatherIcon.src="/images/weather images/rainy.png";
        }
        if(data.weather[0].main=="Mist"){
            weatherIcon.src="/images/weather images/cloudy.png";
        }
        if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="/images/weather images/rainy.png";
        }

        document.querySelector('.weather').style.display="block";
        document.querySelector('.error').style.display="none";
    }

   
/* cloudy
rainy
snowing 
sunny */

}
