const api_key="db81952e32455d09e7859b55479af391 "
//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=db81952e32455d09e7859b55479af391&units=metric
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const searchField = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchButton");
const weatherImage = document.querySelector(".weather-icon");





const weather = async(city)=>{
    const response = await fetch(apiUrl + city + `&appid=${api_key}`)
    var data = await response.json();
    console.log(data);
    console.log(data.main.temp)
    document.querySelector(".temp").innerHTML = data.main.temp + "°C"
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".wind").innerHTML = `${data.wind.speed}  km/hr`
    document.querySelector(".max-min").innerHTML = `Min.${data.main.temp_min}°C-Max.${data.main.temp_max}°C`
    document.querySelector(".wind-deg").innerHTML = `${data.wind.deg} Deg`
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
    document.querySelector(".A-P").innerHTML = `${data.main.pressure} Pa`

    // console.log()

    if(data.weather[0].main === "Clouds")  return weatherImage.src="images/clouds.png";
    if(data.weather[0].main === "Mist")  return weatherImage.src="images/mist.png";
    if(data.weather[0].main === "clear sky")  return weatherImage.src="images/clear.png";
    

}


searchButton.addEventListener("click",()=>{
    
    weather(searchField.value);

})