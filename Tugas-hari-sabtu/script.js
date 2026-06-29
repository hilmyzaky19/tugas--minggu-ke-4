const cityInput=document.getElementById("cityInput");

const searchBtn=document.getElementById("searchBtn");

const locationBtn=document.getElementById("locationBtn");

const kota=document.getElementById("city");

const temperatur=document.getElementById("temp");

const description=document.getElementById("description");

const kelembapan=document.getElementById("humidity");

const wind=document.getElementById("wind");

searchBtn.addEventListener("click",()=>{

getWeather(cityInput.value);

});

locationBtn.addEventListener("click",()=>{

navigator.geolocation.getCurrentPosition(success);

});

function success(position){

const lat=position.coords.latitude;

const lon=position.coords.longitude;

getWeatherLocation(lat,lon);

}

async function getWeather(kota){

const url=`https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${API_KEY}&units=metric&lang=id`;

const response=await fetch(url);

const data=await response.json();

showData(data);

}

async function getWeatherLocation(lat,lon){

const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=id`;

const response=await fetch(url);

const data=await response.json();

showData(data);

}

function showData(data){

    kota.innerHTML = data.name;
   

    temperatur.innerHTML = data.main.temp + "°C";

    description.innerHTML = data.weather[0].description;

    kelembapan.innerHTML = data.main.humidity + "%";

    wind.innerHTML = data.wind.speed + " m/s";

    console.log("Weather :", data.weather[0].main);
    console.log("Temperature :", data.main.temp);

    changeBackground(data.weather[0].main, data.main.temp);

}
function changeBackground(weather, temperature){

   
    if(weather === "Rain"){
        document.body.style.backgroundImage = "url('gif/hujan.gif')";
    }

    else if(weather === "Thunderstorm"){
        document.body.style.backgroundImage = "url('gif/badai.gif')";
    }

    else if(weather === "Snow"){
        document.body.style.backgroundImage = "url('gif/salju.gif')";
    }

   
    else{

        if(temperature >= 32){
            document.body.style.backgroundImage = "url('gif/panas.gif')";
        }

        else if(temperature >= 25){
            document.body.style.backgroundImage = "url('gif/cerah.gif')";
        }

        else if(temperature >= 18){
            document.body.style.backgroundImage = "url('gif/awan.gif')";
        }

        else{
            document.body.style.backgroundImage = "url('gif/salju.gif')";
        }

    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
}
