
const apiKey = "2f54014b6248ce3fb281143d613941d2";
// const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=chandauli&appid=2f54014b6248ce3fb281143d613941d2&units=metric";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wheather-icon");

async function checkWeather(city){
    const responce = await fetch(apiURL+ city + `&appid=${apiKey}`);
    var data = await responce.json();

    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =Math.round(data.main.temp)  +"°c";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "../images/clouds.png"
    } 

    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "../images/clear.png"
    } 
    else if(data.weather[0].main === "Dizzle"){
        weatherIcon.src = "../images/dizzle.png"
    } 
    else if(data.weather[0].main === "Humidity"){
        weatherIcon.src = "../images/humidity.png"
    } 
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "../images/mist.png"
    } 
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "../images/rain.png"
    } 
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "../images/snow.png"
    }
    else{
        weatherIcon.src = "../images/clouds.png"
    } 

    document.querySelector(".weather").style.display = "block";
}


searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

