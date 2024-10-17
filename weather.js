import dotenv from 'dotenv';
dotenv.config();

const apikey = process.env.API_KEY;
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search=document.querySelector(".search input");
const btn=document.querySelector(".search btn");

async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=`+apikey);
    var data=await response.json();
    if(response.status == 404){
        document.querySelector(".error").style.display="block";

        document.querySelector(".weather").style.display="none";
    }
    else{
                document.querySelector(".error").style.display="none";


    }

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src="images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src="images/Rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src="images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src="images/mist.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src="images/Drizzle.png";
    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src="images/snow.png";
    }
    else if(data.weather[0].main == "Smoke"){
        document.querySelector(".weather-icon").src="images/smoke.png";
    }
    else if(data.weather[0].main == "Haze"){
        document.querySelector(".weather-icon").src="images/haze.png";
    }


    document.querySelector(".weather").style.display="block";
    
}
